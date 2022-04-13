export function getFilteredAnime(state) {
  const search = state.anime.searchText;
  const animeList = state.anime.animeList;
  const status = state.anime.status;
  
  if (status === 'resolved' && search !== '') {
    return animeList.filter((anime) => anime.name.includes(search));
  } else {
    return animeList;
  }
}
