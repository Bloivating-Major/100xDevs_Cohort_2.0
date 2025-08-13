function Row({ data={} }){
    const {id='', value='' } = data || {};
  return (
    <button className="suggestion-button" key={id}>{value}</button>
  )
}

export default Row