export function getFilteredSuggestions({data=[], language}){
    return data?.filter(d => {
    const { value } = d || {};
    const isMatched = value?.toLowerCase().includes(language.toLowerCase());
    return isMatched;
  })
}