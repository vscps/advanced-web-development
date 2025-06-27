function likeText(people) {
  const likeCount = people.length;

  if (likeCount === 0) {
    return "No one likes this.";
  } else if (likeCount === 1) {
    return `${people[0]} likes this.`;
  } else if (likeCount === 2) {
    return `${people[0]} and ${people[1]} like this.`;
  } else if (likeCount === 3) {
    return `${people[0]}, ${people[1]} and ${people[2]} like this.`;
  } else {
    return `${people[0]}, ${people[1]} and ${likeCount - 2} others like this.`;
  }
}

console.log(likeText(["Alex", "Jacob", "Mark", "Max"]));
