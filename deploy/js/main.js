import { categories } from './data.js';
import { createCard } from './card.js';
import { setupCarousel } from './carrousel.js';

const mainContent = document.getElementById('main-content');

categories.forEach((slider, sliderIndex) => {
  const sliderSection = document.createElement('section');
  sliderSection.className = 'slider-section';

  const sliderHeader = document.createElement('div');
  sliderHeader.className = 'slider-header';

  const title = document.createElement('h2');
  title.className = 'slider-title';
  title.textContent = slider.title;
  sliderHeader.appendChild(title);

  const indicators = document.createElement('div');
  indicators.className = 'slider-indicators';
  sliderHeader.appendChild(indicators);

  sliderSection.appendChild(sliderHeader);

  const movieRow = document.createElement('div');
  movieRow.className = 'movie-row';
  movieRow.id = `movie-row-${sliderIndex}`;
  sliderSection.appendChild(movieRow); 

  slider.items.forEach(item => {
    const card = createCard(item);
    movieRow.appendChild(card); 
  });

  mainContent.appendChild(sliderSection);

  setupCarousel(`movie-row-${sliderIndex}`, indicators);
});