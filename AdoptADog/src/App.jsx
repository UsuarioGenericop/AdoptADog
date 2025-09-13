import Producto from "../src/components/producto";
function App() {
  return (
    <div>
      <div>
        <Producto title="Frutilla" price="400" stock="0" />
        <Producto title="Maracuyá" price="700" stock="10" />
        <Producto title="Durazno" price="1000" stock="20" />
      </div>
    </div>
  );
}
export default App;
