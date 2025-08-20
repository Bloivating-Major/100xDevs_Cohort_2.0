// 3rd party imports
import { useState } from 'react';

// component imports
import Header from './components/header/Header'
import Suggestions from './components/suggestions/Suggestions';

// utils imports
import { getFilteredSuggestions } from './utils';

// hooks imports
import useNetwork from './useNetwork';

// css imports
import './autocomplete.css'

const Autocomplete = () => {
  // props

  // states
  const [language, setLanguage] = useState('');

  // useEffect

  // hooks
  const { data=[], isLoading=false, isError=false } = useNetwork() || {};

  // functions
  function handleLanguageChange(e){
     const value = e?.target?.value;
     setLanguage(value);
  }

  // derived values
  const filteredSuggestions = getFilteredSuggestions({data, language});

  if(isLoading) return <h1>Loading...</h1>

  if(isError) {
    return <>
    <h1>Something went wrong...</h1>
    <button>Refresh</button>
    </>
  }

  if(!data.length) return <h1>No Data</h1>;

  return (
    <div className='autocomplete'>
      <h2>Autocomplete</h2>
      <Header onLanguageChange={handleLanguageChange} language={language} />
      <Suggestions suggestions={filteredSuggestions} />
    </div>
  )
}

export default Autocomplete;