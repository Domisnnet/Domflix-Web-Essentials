import { createCard } from './card.js';

export function createCarousel(category) {
  const section = document.createElement('div');
  section.className = 'slider-section';

  const header = document.createElement('div');
  header.className = 'slider-header';

  const title = document.createElement('h2');
  title.className = 'slider-title';
  title.innerText = category.title;

  const indicators = document.createElement('div');
  indicators.className = 'slider-indicators';

  header.appendChild(title);
  header.appendChild(indicators);
  section.appendChild(header);

  const row = document.createElement('div');
  row.className = 'movie-row';

  category.items.forEach((item, index) => {
    const card = createCard(item);
    row.appendChild(card);

    const indicator = document.createElement('span');
    indicator.className = 'indicator';
    if (index === 0) {
      indicator.className += ' active';
    }
    indicators.appendChild(indicator);
  });

  section.appendChild(row);
  return section;
}