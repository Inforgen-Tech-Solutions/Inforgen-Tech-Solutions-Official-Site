import NavOnly from "../layout/NavOnly"

const RouteNotFound = () => {
  return (
    <NavOnly>
      <main>
        <h1 className="text-3xl">
          Page not Found
        </h1>
      </main>
    </NavOnly>
  )
}

export default RouteNotFound