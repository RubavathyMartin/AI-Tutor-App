
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
