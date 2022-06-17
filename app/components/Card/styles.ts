import styled from 'styled-components';

import { Calendar3, XLg } from '@styled-icons/bootstrap';

export const CloseIcon = styled(XLg)`
  width: 1.2em;
  color: #312E38;
  pointer-events: none;
  text-align: center;
  color: #ffadad;
  padding-bottom: 5px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 20px;
  cursor: pointer;
`;

export const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Container = styled.div`
  background: #fff;
  color: #312e38;
  max-height: 400px;
  border-radius: 10px;
  font-weight: 500;
  box-shadow: 0 1px 2px #a1a1a1;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow: auto;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-decoration: underline;
  display: flex;
  margin-left: 10px;
  text-transform: capitalize;
  justify-content: center;
`;

export const CreatedAt = styled.div`
  font-size: 17px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  color: #333;
  margin-bottom: 10px;
`;

export const Task = styled.label`
  margin-top: 10px;
  width: 100%;
  display: flex;

  span[data-type="name"] {
    margin-left: 5px;
    font-size: 16x;
  }

  span[data-type="owner"] {
    margin-left: 5px;
    font-size: 16x;
    color: #747573;
    text-align: center;
  }

  span[data-type="expire_at"] {
    margin-left: 5px;
    font-size: 16x;
    color: #747573;
    text-align: right;
  }

  input[type="checkbox"]:checked + span {
    + span {
      text-decoration: line-through;  
    }

    text-decoration: line-through;
    color: #666;
  }
`;

export const Line = styled.hr`
  width: 100%;
  border-top: 3px solid #A9ABA7;
  margin: 10px 0px;
`;

export const CalendarIcon = styled(Calendar3)`
  width: 1.2em;
  color: #312E38;
  margin-right: 10px;
`;

export const NewTask = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px dashed black;
`

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 10px;
  background-color: #f7f7f7;
  border-radius: 30px;
  border: 2px solid #e6e6e6;
  width: 100%;
`;

export const TasksStatus = styled.div`
  text-align: right;
  margin-right: 20px;
  color: #706f6f;
`;