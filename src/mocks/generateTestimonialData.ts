import { faker } from '@faker-js/faker';

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export function generateTestimonials(count = 5): Testimonial[] {
  const arr: Testimonial[] = [];
  
  for (let i = 0; i < count; i++) {
    arr.push({
      id: faker.string.uuid(),
      // paragraph takes number of sentences (between 1 and 3)
      quote: faker.lorem.paragraph(faker.number.int({ min: 1, max: 3 })),
      
      name: faker.person.fullName(),
      role: `${faker.person.jobTitle()}, ${faker.company.name()}`,
      avatar: `https://i.pravatar.cc/150?img=${faker.number.int({ min: 1, max: 70 })}`
    });
  }
  
  return arr;
}
