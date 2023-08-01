export default function displayEpisodesData(displayData) {
  const episodesSection = document.getElementById('main-container');

  displayData.forEach((individualEpisode, index) => {
    const div = document.createElement('div');
    div.className = 'episodes-div';

    if (index >= 6) {
      div.classList.add('hidden');
    }

    const imageElement = document.createElement('img');
    imageElement.src = individualEpisode.image.medium;
    imageElement.alt = individualEpisode.name;

    const pElement = document.createElement('p');
    // instead of word rating, add icon that Winni found
    pElement.textContent = `${individualEpisode.name} - Rating: ${individualEpisode.rating.average}`;

    const commentsBtn = document.createElement('button');
    commentsBtn.className = 'comments';
    commentsBtn.innerHTML = 'Comments';

    div.appendChild(imageElement);
    div.appendChild(pElement);
    div.appendChild(commentsBtn);

    episodesSection.appendChild(div);
  });

  const seeMore = document.createElement('button');
  seeMore.id = 'see-more';
  seeMore.innerHTML = 'SEE MORE';
  episodesSection.appendChild(seeMore);
}