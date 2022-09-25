import styled from '@emotion/styled';

export const SearchbarBox = styled.header`
  position: fixed;
  width: 100%;
  z-index: 50;
  padding-top: 20px;
  padding-bottom: 20px;
  background-image: linear-gradient(to top, #d2fffc, #00b4ff);
  height: 80px;
`;

export const FormStyles = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const LabelStyles = styled.label`
  width: 100%;
`;

export const InputStyles = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 40px;
  padding-right: 10px;
  background-color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  outline: none;
`;

export const ButtonBox = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  padding-top: 5px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 180, 255, 0.5);
  border-radius: 4px;
  border: transparent;
`;
