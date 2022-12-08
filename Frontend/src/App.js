
import './App.css';
import Form from './Components/Form_to_Input6/Form';
import FullWitdthBanner from './Components/Full_width_Banner_2/FullWitdthBanner';
import HeroBanner from './Components/Hero_Banner_1/HeroBanner';
import LeftRightSection from './Components/Left_Right_Section/LeftRightSection';
import TaskTable from './Components/TaskTable/TaskTable';
import TaskCompleted from './Components/Task_Completed/TaskCompleted';

import TwoColumnBoxes from './Components/Two_column_boxes/TwoColumnBoxes';
function App() {
  return (
    <div className="App">
      <HeroBanner/>
      <FullWitdthBanner/>
      <TwoColumnBoxes/>
      <LeftRightSection/>
      <Form/>
      <TaskTable/>
      <TaskCompleted/>
    </div>
  );
}

export default App;
