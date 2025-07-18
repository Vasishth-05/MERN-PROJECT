import './App.css'

function App() {

  return (
    <Box minH={"100vh"}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </Box>
      
  )
}

export default App
