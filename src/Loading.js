function Loading({update, haveDogs}) {
  update();
  console.log("loading called update!")

  return (
    <div className="Loading">Loading...</div>
  )
}

export default Loading;