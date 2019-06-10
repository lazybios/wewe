import chunk from 'lodash.chunk';
import ChatCard from './ChatCard';

const ChatCards = ({ groups }) => {
  const chunkedChats = chunk(groups, 3);
  const cards = chunkedChats.map(threeChats => (
    <div className="columns">
      {
        threeChats.map(group => (
          <div className="column is-4">
            <ChatCard
              id={group.id}
              name={group.name}
              description={group.description}
              logoUrl={group.logoUrl}
              userCount={group.userCount}
              type={group.type}
            />
          </div>
        ))
      }
    </div>
  ));

  return cards;
};

export default ChatCards;