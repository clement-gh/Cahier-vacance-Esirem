import { Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/home';
import { Cours } from './pages/cours';
import { NoPage } from "./pages/noPage";
import { Matiere } from "./pages/matiere";
import { Connexion } from "./pages/connexion";
import { Inscription } from "./pages/inscription";
import {Annee} from "./pages/annee";
import { Quiz } from "./pages/quiz";
import { ExerciceL } from "./pages/exerciceL"
import { Corrige } from "./pages/corrige";
import { CreateCoursPage } from "./pages/backoffice/create_cours_page";
import { MenuBackOffice } from "./pages/backoffice/menu_backoffice";
import { GestionUtilisateurs } from "./pages/backoffice/gestion_utilisateurs";
import { GestionCours } from "./pages/backoffice/gestion_cours";
import { UpdateCoursPage } from "./pages/backoffice/update_cours_page";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cours/:id" element={<Cours/>} />
      <Route path="/matieres" element={<Matiere/>} />
      <Route path="/connexion" element={<Connexion/>} />
      <Route path="/inscription" element={<Inscription/>} />
      <Route path="/:nom/:idMatiere" element={<Annee/>}/>
      <Route path="/quiz/:idQuiz" element={<Quiz/>}/>
      <Route path="/ExoLong/:id" element={<ExerciceL/>}/>
      <Route path="/corrige/:id" element={<Corrige/>}/>
      
      <Route path="/backoffice" element={<MenuBackOffice/>} />
      <Route path="/backoffice/gestion_cours" element={<GestionCours/>} />
      <Route path="/backoffice/gestion_utilisateurs" element={<GestionUtilisateurs/>} />
      <Route path="/backoffice/creation_cours" element={<CreateCoursPage/>} />
      <Route path="/backoffice/update_cours/:idCours" element={<UpdateCoursPage/>} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
