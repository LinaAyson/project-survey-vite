import bg from "./assets/cov1.jpg";
import { MultiStepForm } from "./MultiStepForm.jsx";
import Header from "./components/Header";

export const App = () => {
  // const [showSummary, setShowSummary] = useState(false);
  return (
    <>
      <Header />
      <section className="container">
        <img src={bg} className="bg-img" alt="paper" />
        <div className="container-question">
          <MultiStepForm />
        </div>
      </section>
    </>
  );
};
