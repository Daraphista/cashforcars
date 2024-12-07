const ytEmbedContainer = document.querySelector('.yt-embed');
const ytEmbedThumbnail = document.querySelector('.yt-embed>.thumbnail');

window.addEventListener('click', (e) => { 
  if (ytEmbedThumbnail.contains(e.target)) {
    console.log("ytEmbedContainer is clicked");

    ytEmbedContainer.innerHTML = `
      <iframe width="480" height="259" src="https://www.youtube.com/embed/Y1nTFxIOC8M?si=0WdDSIHBcvLSb11F" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    `;
  }
});
console.log(ytEmbedContainer, ytEmbedThumbnail);

