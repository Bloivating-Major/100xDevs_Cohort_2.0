export function getFilteredSuggestions({data=[], language}){
    return data?.filter(d => {
    const { value } = d || {};
    const isMatched = language && value?.toLowerCase().includes(language.toLowerCase());
    return isMatched;
  })
}