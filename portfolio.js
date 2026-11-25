const nameHeading = document.querySelector('#name');
nameHeading.textContent = portfolio.name || 'Your name';
document.title = `${nameHeading.textContent} | Mechanical Engineering`;
document.querySelector('#role').textContent = portfolio.role || 'Mechanical Engineering';
document.querySelector('#bio').textContent = portfolio.bio || 'Short bio';

function showOptionalImage(image, src, container = image) {
  if (!src) return;

  image.addEventListener('error', () => { container.hidden = true; });
  image.src = src;
  container.hidden = false;
}

if (portfolio.backgroundImage) {
  const background = document.querySelector('#site-background');
  background.style.backgroundImage = `url(${JSON.stringify(portfolio.backgroundImage)})`;
  if (portfolio.backgroundTileWidth > 0) {
    background.style.backgroundRepeat = 'repeat';
    background.style.backgroundSize = `${portfolio.backgroundTileWidth}px auto`;
  }
  background.hidden = false;
}

const siteBrand = document.querySelector('#site-brand');
showOptionalImage(siteBrand.querySelector('img'), portfolio.siteIcon, siteBrand);

const introPhoto = document.querySelector('#intro-photo');
introPhoto.alt = portfolio.introPhoto?.alt ?? '';
showOptionalImage(introPhoto, portfolio.introPhoto?.src);

const profileLinks = document.querySelector('#profile-links');
for (const { label, url } of portfolio.links) {
  const item = document.createElement('li');
  const entry = document.createElement(url ? 'a' : 'span');
  entry.textContent = label;

  if (url) {
    entry.href = url;
  }

  item.append(entry);
  profileLinks.append(item);
}

if (portfolio.resume) {
  const resume = document.createElement('a');
  resume.className = 'resume-link';
  resume.href = portfolio.resume;
  resume.textContent = 'Open résumé PDF';
  document.querySelector('#resume-content').replaceChildren(resume);
}

const projectGrid = document.querySelector('#project-grid');
const cardTemplate = document.querySelector('#project-card');
const dialog = document.querySelector('#project-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogDescription = document.querySelector('#dialog-description');
const dialogGallery = document.querySelector('#dialog-gallery');
const projectFiles = document.querySelector('#project-files');
const autoplayObserver = new IntersectionObserver((entries, observer) => {
  for (const { intersectionRatio, target: video } of entries) {
    if (intersectionRatio >= 0.5 && dialog.open && video.isConnected) {
      observer.unobserve(video);
      video.play().catch(() => {
        // The controls still work if autoplay is blocked.
      });
    }
  }
}, { root: dialog, threshold: 0.5 });
let activeProjectButton;

for (const project of portfolio.projects) {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  const title = card.querySelector('.project-title');
  const description = card.querySelector('.project-description');
  const projectTitle = project.title.trim();

  if (projectTitle) {
    const openButton = document.createElement('button');
    openButton.type = 'button';
    openButton.textContent = projectTitle;
    openButton.setAttribute('aria-haspopup', 'dialog');
    openButton.addEventListener('click', () => openProject(project, openButton));
    title.append(openButton);
  } else {
    title.textContent = 'Project title';
  }

  description.textContent = project.description || (projectTitle ? '' : 'Project description');
  description.hidden = !description.textContent;
  const cover = project.images[0];
  if (cover) {
    addImage(card.querySelector('.project-cover'), cover);
  }

  projectGrid.append(card);
}

function addImage(frame, { src, alt }) {
  const img = document.createElement('img');
  img.alt = alt;
  img.addEventListener('error', () => { img.hidden = true; });
  img.src = src;
  frame.append(img);
}

function openProject(project, button) {
  activeProjectButton = button;
  dialogTitle.textContent = button.textContent;
  dialogDescription.textContent = [project.description, project.details].filter(Boolean).join('\n\n');
  dialogDescription.hidden = !dialogDescription.textContent;

  projectFiles.replaceChildren();
  for (const { src, label } of project.files ?? []) {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = src;
    link.textContent = label;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${label} (opens in a new tab)`);
    item.append(link);
    projectFiles.append(item);
  }
  projectFiles.hidden = !projectFiles.childElementCount;

  dialogGallery.replaceChildren();
  for (const image of project.images) {
    const figure = document.createElement('figure');
    figure.className = 'gallery-photo';

    const frame = document.createElement('div');
    frame.className = 'image-frame gallery-image';
    addImage(frame, image);
    figure.append(frame);

    if (image.caption?.trim()) {
      const caption = document.createElement('figcaption');
      caption.textContent = image.caption;
      figure.append(caption);
    }

    dialogGallery.append(figure);
  }
  const autoplayVideos = [];
  for (const { src, label, autoplay } of project.videos ?? []) {
    const video = document.createElement('video');
    video.className = 'gallery-video';
    video.controls = true;
    video.playsInline = true;
    video.preload = 'metadata';
    if (autoplay === true) {
      video.muted = true;
      autoplayVideos.push(video);
    }
    video.setAttribute('aria-label', label);
    video.addEventListener('error', () => {
      const notice = document.createElement('p');
      notice.textContent = `Couldn’t load ${label}.`;
      video.replaceWith(notice);
    });
    video.src = src;
    dialogGallery.append(video);
  }
  dialogGallery.hidden = !dialogGallery.childElementCount;

  dialog.showModal();
  dialog.scrollTop = 0;

  if (autoplayVideos.length) {
    // Wait for the photos to take up their final space above the videos.
    const photos = Array.from(dialogGallery.querySelectorAll('img'));
    Promise.allSettled(photos.map(photo => photo.decode())).then(() => {
      for (const video of autoplayVideos) {
        if (dialog.open && video.isConnected) autoplayObserver.observe(video);
      }
    });
  }
}

function isOutsideProject(event) {
  const bounds = dialog.getBoundingClientRect();
  return event.clientX < bounds.left || event.clientX > bounds.right ||
    event.clientY < bounds.top || event.clientY > bounds.bottom;
}

let pointerStartedOutside = false;
dialog.addEventListener('pointerdown', (event) => {
  pointerStartedOutside = isOutsideProject(event);
});
dialog.addEventListener('click', (event) => {
  if (pointerStartedOutside && isOutsideProject(event)) dialog.close();
  pointerStartedOutside = false;
});

dialog.addEventListener('close', () => {
  autoplayObserver.disconnect();
  for (const video of dialogGallery.querySelectorAll('video')) {
    video.pause();
  }
  activeProjectButton?.focus({ preventScroll: true });
  activeProjectButton = undefined;
});
