import React, { useCallback, useContext, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const inputRef = useRef(); // хук для обращения к ДОМ элементам

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus(); //оставляет курсор активным
  };

  const updateSearchValue = useCallback(
    //этот хук сохраняет ссылку на функцию и она заново не пересоздается каждый раз
    debounce((str) => {
      //debounce это типа сеттаймаута, делает задержку в выполнении функции
      setSearchValue(str);
    }, 500),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <svg className={styles.icon__search} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value} //контролируемый инпут, благодаря передаче value
        onChange={(event) => onChangeInput(event)}
        className={styles.input}
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <svg
          onClick={() => onClickClear()}
          className={styles.icon__close}
          height="14px"
          version="1.1"
          viewBox="0 0 14 14"
          width="14px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
            <g fill="#000000" id="Core" transform="translate(-341.000000, -89.000000)">
              <g id="close" transform="translate(341.000000, 89.000000)">
                <path
                  d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
