import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function StoryDetail() {
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    // This is where you would fetch the story data
    // For now, we'll simulate a fetch with setTimeout
    setLoading(true);
    setTimeout(() => {
      setStory({
        id: id,
        title: `Story ${id}`,
        content: `This is the content of story ${id}. It's a fascinating tale from Nusantara.`,
        author: 'Anonymous',
        publishDate: '2023-06-10'
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div>
      <h1>{story.title}</h1>
      <p><strong>Author:</strong> {story.author}</p>
      <p><strong>Published:</strong> {story.publishDate}</p>
      <p>{story.content}</p>
    </div>
  );
}

export default StoryDetail;