export default function Header(props) {
    console.log(props);
    return (
      <header className="bg-black text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead"></p>
        <a href="#" className="btn btn-light btn-lg">Shop Now</a>
      </div>
    </header>
    )
  }