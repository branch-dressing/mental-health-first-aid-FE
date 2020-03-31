import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toGetMoods } from '../../selectors/useSelectors';
import { getAllMoods, setCurrentMood, deleteMoodAction, moodsNeedToBeUpdate } from '../../actions/moodActions';
import { MoodForm } from '../MoodForm';

export const Moods = () => {
  const dispatch = useDispatch();
  const { allMoods, currentMood, updated } = useSelector(toGetMoods);

  const [selected, setSelected] = useState('default');

  useEffect(() => {
    if(updated) dispatch(getAllMoods());
  }, [updated]);

  useEffect(() => {
    const foundMood = allMoods.find(({ _id }) => _id === selected);
    dispatch(setCurrentMood(foundMood));
  }, [selected]);

  const handleEdit = () => {
    console.log('Editing!');
  }

  const handleDelete = () => {
    const areYouSure = confirm(`Are you sure you want to delete ${currentMood.moodName}?`);
    if(areYouSure) {
      dispatch(deleteMoodAction(currentMood._id));
    }
  };

  const moodNameOptions = allMoods.map(({ moodName, _id }) => (<option key={_id} value={_id}>{moodName}</option>));

  const solutionsList = currentMood ? (
    <div>
      <ul>
        {currentMood.solutions.map(solution => (
          <li key={solution}>{solution}</li>
        ))}
      </ul>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  ) : (
    <></>
  );
  

  return (
    <section>
      <h3>Currently Feeling</h3>
      <select 
        value={selected} 
        onChange={({ target }) => setSelected(target.value)}>
        <option value="defualt">Select a Mood</option>
        {moodNameOptions}
        <option value="add">Add +</option>
      </select>
      {solutionsList}
      {selected === 'add' ? (<MoodForm />) : (<></>)}
    </section>
  );
};