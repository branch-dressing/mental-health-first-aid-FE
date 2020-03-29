import React from 'react';
import { useMoodForm } from '../hooks/useMoodForm';
import { Solution } from './Solution';


export const MoodForm = () => {
  const { success, handleSubmit, moodName, setMoodName, solutions, setSolutions } = useMoodForm();

  const renderSolutions = solutions.map((solution, index) => (
    <li key={index}>
      <Solution setSolutions={setSolutions} solutions={solutions} index={index} />
    </li>
  ));

  return success ? (
    <section>
      <p>Note Created!</p>
    </section>
  ) : (
    <section>
      <div>
        <label>When I feel
          <input required
            type="text"
            value={moodName}
            onChange={({ target }) => setMoodName(target.value)} />
        </label>
        <br/>
        <p>What helps me is:</p>
        <ul onKeyPress={(event) => {
          if(event.key === 'Enter') setSolutions([...solutions, 'new']);
        }}>
          {renderSolutions}
        </ul>
        <button onClick={() => {
          setSolutions([...solutions, 'new']);
        }}>Add</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
};
