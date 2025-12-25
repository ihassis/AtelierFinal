import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {CoreConcepts, EXAMPLES } from "./data";

export default function App() {
const [selectedTopic, setSelectedTopic] = useState(null);

function handleSelect(topic) {
    setSelectedTopic(topic);
}

let tabContent = <p>Please select a topic.</p>;

if (selectedTopic) {
    tabContent = (
    <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
    </div>
    );
}

  return (
    <>
      <Header />

      <section id="CoreConcepts">
        <ul>
          {CoreConcepts.map((concept) => (
            <CoreConcept
              key={concept.title}
              image={concept.image}
              title={concept.title}
              description={concept.description}
            />
          ))}
        </ul>
      </section>

      <section id="examples">
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>

          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>

          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>

          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>

        {tabContent}
      </section>
    </>
  );
}
