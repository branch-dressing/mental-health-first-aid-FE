import React from 'react';
import PropTypes from 'prop-types';
import { useMoodForm } from '../hooks/useMoodForm';
import { Solution } from './Solution';

export const MoodForm = ({ importId, importMoodName, importSolutions }) => {
  const { success, 
    handleSubmit, 
    moodName, 
    setMoodName, 
    solutions, 
    setSolutions, 
    handleKeyPress, 
    handleAdd } = useMoodForm({
    id: importId,
    moodName: importMoodName, 
    solutions: importSolutions });

  const renderSolutions = solutions.map((solution, index) => (
    <li key={index}>
      <Solution setSolutions={setSolutions} intialSolution={solution} solutions={solutions} index={index} />
    </li>
  ));

  return success ? (
    <section>
      {!importId ? <p>Created!</p> : <p>Updated</p> }
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
        <ul onKeyPress={(event) => handleKeyPress(event)}>
          {renderSolutions}
          <li><button onClick={handleAdd}>Add</button></li>
        </ul>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </section>
  );
};

MoodForm.propTypes = {
  importId: PropTypes.string,
  importMoodName: PropTypes.string,
  importSolutions: PropTypes.array
};
