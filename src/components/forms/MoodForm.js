import React from 'react';
import PropTypes from 'prop-types';
import { useMoodForm } from '../../hooks/forms/useMoodForm';
import { Solution } from '../Solution';
import style from '../Styles/NewUser.css';

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
      <div className={style.moodForm}>
        <label>When I feel</label>
        <input autoFocus required
          type="text"
          value={moodName}
          onChange={({ target }) => setMoodName(target.value)} />
        <label>What helps me is:</label>
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
