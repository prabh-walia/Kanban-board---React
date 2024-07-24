
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../redux-store/themeStore';
const ToggleButton = ({ checked, onChange }) => {
      const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (


   <> <input type="checkbox" id="switch"  checked={isDarkMode}
   onChange={handleToggle}/><label for="switch">Toggle</label></>
  );
};

export default ToggleButton;
