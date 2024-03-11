import './App.css'
import DisplayPosts from './react-queries-code/DisplayPost'
import CreatePost from './react-queries-code/CreatePost'
import UpdatePost from './react-queries-code/UpdatePost'
import DeletePost from './react-queries-code/DeletePost'

function App() {
  return (
    <>
      <h2 className="text-center font-semibold font-mono text-[clamp(35px,0.8vw,40px)]">
        The React Query
      </h2>
      <div className="grid gap-y-[20px] h-full">
        <div className="w-full grid grid-cols-3">
          <CreatePost></CreatePost>
          <UpdatePost></UpdatePost>
          <DeletePost></DeletePost>
        </div>
        <div className='mt-2'>
          <h3 className='text-[40px] font-mono font-semibold text-center'>Posts</h3>
          <DisplayPosts></DisplayPosts>
        
        </div>
         
      </div>
    </>
  )
}

export default App
