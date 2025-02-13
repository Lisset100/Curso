export const Navbar = () => {
  const cohorte = 50;
  const navbarJsx = (
    // {Se imprime número de cohorte}
    <nav>
      <h2>Cohorte {cohorte}</h2>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>

      </ul>
    </nav>
  );
  return navbarJsx;

}

