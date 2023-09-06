
 export const Book = (props) => {
 
  const { id, url, title, author, children, getBook ,number} = props
  console.log(props)
  return (
    <article className='book'>
      <img src={url} alt='{title}' />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <div>
        <span className='number'>{`# ${number+1}`}</span>
      </div>
      {children}
      <button onClick={() => getBook(id)}>click me</button>
    </article>
  )
}
