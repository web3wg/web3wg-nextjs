import styled from "styled-components";

export default styled.div`
  margin-bottom: 140px;

  .no-events {
    text-align: center;
    font-size: 1.4rem;
  }

  .events-list {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`;

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  border: 1px solid #fff;
  border-radius: 12px;
  padding: 4px 20px;
  transition: 0.4s;

  &:hover {
    transform: scale(0.99);
    box-shadow: -12px 16px 38px rgba(252, 238, 33, 0.2);
  }

  .event-details {
    flex: 1;
    color: #fff;

    .event-date {
      font-size: 0.6rem;
      font-weight: 500;
      margin-bottom: 8px;
      color: #fcee21;
      text-transform: uppercase;
    }

    .event-title {
      font-size: 1rem;
      margin-bottom: 8px;
      text-transform: uppercase;
    }

    .event-description {
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 0px;
      font-size: 0.8rem;
      opacity: 0.6;
      line-height: normal;
    }
  }

  .event-button {
    background: #e1058c;
    box-shadow: -12px 16px 38px rgba(237, 7, 143, 0.3);
    border-radius: 22px;
    padding: 12px 28px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(0.95);
      box-shadow: -12px 0px 38px rgba(237, 7, 143, 0.3);
    }
  }

  @media (max-width: 575.98px) {
    gap: 16px;
    flex-direction: column;
    padding-bottom: 24px;
    text-align: center;
  }
`;
