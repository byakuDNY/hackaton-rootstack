  return (
    <BrowserRouter>
      <Routes>
        {/* Las rutas */}
        <Route path="/" index element={<Homepage />}></Route>
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        ></Route>
        <Route path="/gameplay/:id/:name" element={<Gameplay />}></Route>
        <Route path="/scoreboard/:game_mode" element={<Scoreboard />}></Route>
        <Route path="/ranking/:game_mode" element={<Ranking />}></Route>
        <Route path="/glosario" element={<Glossary />}></Route>
        <Route path="/ayuda" element={<Help />}></Route>
        <Route
          path="/herramienta-admin"
          element={
            authUser?.username === "admin" ? <Admin /> : <Navigate to="/" />
          }
        ></Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </BrowserRouter>