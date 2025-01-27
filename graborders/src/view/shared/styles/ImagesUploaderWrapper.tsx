import styled from "styled-components";

const ImagesUploaderWrapper = styled.div`
  .img-card:hover .img-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .img-buttons {
    display: none;
    position: relative;
    bottom: 2.1rem;
    width: calc(100px);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .img-buttons * {
    color: white;
  }
`;

export default ImagesUploaderWrapper;
