import '../../css/loader.css'

function Loader() {
  return (
    <section className="ldr-wrapper absolute z-10  bg-cyanGreen-100/10 w-screen h-screen flex ">
      <div className="lds-ring m-auto ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default Loader;
