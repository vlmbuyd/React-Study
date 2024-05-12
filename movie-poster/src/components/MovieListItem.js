import styled from "styled-components";

const Image = styled.img`
  height: 380px;
  margin-bottom: 10px;
  /* object-fit: cover;
  object-position: center; */
`;

const Description = styled.div`
  display: none;
  padding: 20px 13px 0 13px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 470px;
  background-color: black;
  opacity: 0.8;

  & p {
    font-size: 15px;
  }
`;

const ItemContainer = styled.div`
  position: relative;
  width: 270px;
  height: 470px;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
  margin: 10px 0;
  color: white;
  background-color: #3e469e;

  &:hover ${Description} {
    display: block;
    /* opacity: 0.1;
    filter: brightness(0.5); */
    /* background-color: rgba(0, 0, 0, 0.2); */
  }
`;

const Title = styled.span`
  margin-left: 7px;
  font-weight: 300;
`;

const Rate = styled.span`
  position: absolute;
  top: 390px;
  right: 10px;
  font-weight: 300;
`;

function MovieListItem({ item }) {
  return (
    <ItemContainer>
      <Image
        src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
        alt={item.original_title}
      ></Image>
      <div>
        <Title>{item.original_title}</Title>
        <Rate>{item.vote_average}</Rate>
      </div>
      <Description>
        <span>{item.original_title}</span>
        <p>{item.overview}</p>
      </Description>
    </ItemContainer>
  );
}

export default MovieListItem;
