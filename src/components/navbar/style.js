import styled from "styled-components";

export const Container = styled.div`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: linear-gradient(50deg, #161b68 26%, #5f68f1 69%, #676fde 88%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    font-family: 'Poppins', sans-serif;
  }

  a {
  box-shadow: inset 0 0 0 0 #6af670;
  color: #fff;
  padding: 0 .25rem;
  margin: 0 -.25rem;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  text-decoration: none;
}
  a:hover {
    color: #fff;
    box-shadow: inset 200px 0 0 0 #54b3d6;;
  }

body {
  display: grid;
  height: 100vh;
  place-items: center;
}


body {
  display: grid;
  height: 100vh;
  place-items: center;
}

  .logo img {
    width: 15rem;
    margin: 0 5rem;
  }

  .nav-links {
    display: flex;
    list-style: none;
    
    gap: 40px;
  }

  .links {
    font-size: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    transition: 0.3s ease;
  }

  .links:hover {
    color: #6af670;
  }

  .auth-buttons button {
    color: #2b318a;
    border: none;
    border-radius: 50px;
    width: 14rem;
    height: 50px;
    margin-right: 2rem;
    background: #6af670;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease-out, color 0.3s ease-out;
  }

  .auth-buttons button:hover {
    background-color: #2b318a;
    color: #fff;
  }

  .menu-icon {
    display: none;
    cursor: pointer;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1001;
  }

  @media (max-width: 720px) {
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 100vh;
      background-color: white;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translateY(-100%);
      z-index: 1000;
      transition: transform 0.3s ease;
    }

    .navbar.active {
      transform: translateY(0);
    }

    .nav-links {
      flex-direction: column;
      gap: 20px;
      font-size: 1.2rem;
    }

    .auth-buttons {
      margin-top: 1.5rem;
      background-color: transparent;
    }

    .auth-buttons button {
      width: 12rem;
    }

    .menu-icon {
      display: block;
    }

    .logo img {
      margin: 0;
      padding-bottom: 10px;
    }
  }
`;
