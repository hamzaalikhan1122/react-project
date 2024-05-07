import { CORE_CONCEPTS, EXAMPLES } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((core, index) => (
              <CoreConcept {...core} key={index} />
              // <CoreConcept
              //   title={core.title}
              //   description={core.description}
              //   image={core.image}
              //   key={index}
              // />

              /* Examples other than Mapping 
              
                <CoreConcept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
                key={index}
              />

              OR

              <CoreConcept {...CORE_CONCEPTS[0]}/>
              <CoreConcept {...CORE_CONCEPTS[1]}/>
              <CoreConcept {...CORE_CONCEPTS[2]}/>

              */
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {CORE_CONCEPTS.map((concept) => (
              <TabButton
                onSelect={() => handleSelect(concept.title)}
                key={concept.title}
                isSelected={selectedTopic === concept.title}
              >
                {concept.title}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            {selectedTopic ? (
              <>
                {" "}
                <h3>{EXAMPLES[selectedTopic.toLocaleLowerCase()]?.title}</h3>
                <p>
                  {EXAMPLES[selectedTopic.toLocaleLowerCase()]?.description}
                </p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic.toLocaleLowerCase()]?.code}
                  </code>
                </pre>
              </>
            ) : (
              <p>Please select a topic.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

{
  /*
  import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
  
  <section className="expenses">
{expenses.map((expense) => (
  <ExpenseItem
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
    key={expense.id}
  />
))}
</section> */
}
