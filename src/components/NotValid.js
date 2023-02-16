
  // useEffect  - не может возвращать промис,  а async/await возвращает промис, 
  // для этого aсинк помещаем в другую функцию или IIFE или работаем с помощью методов метод then.


  // !!  Неправильное написание useEffect  внутри которого async/await вoзвращающий промис
  // useEffect(async() => {
  //   try {
  //     const res = await fetch(API_URL)
  //     const posts = await res.json()
  //     setPosts(posts)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  //   setIsLoading(false)
  // }, [])
