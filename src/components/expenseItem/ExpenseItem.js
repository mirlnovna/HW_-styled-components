import React from "react";
import ExpenseDate from "../expenseDate/ExpenseDate";
import styled from "styled-components";

function ExpenseItem(props) {
  return (
    <ItemContainer>
      <ExpenseDate date={props.expenseDate} />
      <ExpenseDescription>
        <Title>{props.expenseTitle}</Title>
        <Price>${props.expensePrice}</Price>
      </ExpenseDescription>
    </ItemContainer>
  );
}

export default ExpenseItem;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  background-color: #4b4b4b;
`;

const ExpenseDescription = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  color: #fff;
  margin-left: 20px;
`;

const Title = styled.h2`
  color: #3a3a3a;
  font-size: 1.25rem;

  flex: 1;
  margin: 0 1rem;
  color: white;
`;

const Price = styled.div`
  font-size: 1.25rem;
  padding: 0.5rem 1.5rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  border-radius: 12px;
`;
