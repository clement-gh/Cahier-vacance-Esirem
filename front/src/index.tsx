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
      
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
