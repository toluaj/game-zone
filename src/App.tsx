import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GamePanel from "./components/GamePanel"

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area='nav'><NavBar /></GridItem>
      <Show above="lg">
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main'><GamePanel /></GridItem>
    </Grid>
  )
}

export default App
