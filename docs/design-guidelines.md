# Soothly Design Guidelines

## Brand Foundation

### Brand Archetype

**Caregiver-Everyman-Creator** - A supportive companion who understands the journey, provides expert guidance, and empowers families to create their own success stories.

### Brand Personality

#### Core Traits

- **Nurturing yet practical** - Warm and supportive without being overly sentimental
- **Approachably knowledgeable** - Expert guidance delivered in everyday language
- **Optimistically empowering** - Focused on possibilities and positive outcomes
- **Trustworthy and reliable** - Consistent, dependable presence parents can count on
- **Inclusively encouraging** - Makes every parent feel capable and supported

#### Personality Dimensions

- Competent but not intimidating
- Caring but not anxious
- Confident but not arrogant
- Innovative but not risky
- Personal but professional

## Tone of Voice

### Primary Voice Characteristics

- **Conversational and accessible** - "Let's walk through this together" not "Follow protocol 2.3"
- **Gently encouraging** - "You've got this" rather than "Don't worry"
- **Straightforwardly honest** - Clear about challenges while emphasizing achievability
- **Celebratory of progress** - Acknowledges small wins and milestones
- **Practically supportive** - Offers concrete next steps and actionable guidance

### Voice Examples

| Instead of                    | Say                                                       |
| ----------------------------- | --------------------------------------------------------- |
| "Initiate exposure protocol"  | "Ready to take the next small step?"                      |
| "Adverse reactions may occur" | "We'll help you know what to watch for and when to pause" |
| "Start protocol"              | "Take the next step"                                      |
| "Clinical assessment"         | "Let's check in on your progress"                         |

## Color Palette

### Primary Colors

- **Sage Green** `#87A96B` - Growth, healing, natural progression
- **Warm Cream** `#F7F5F0` - Safety, comfort, nurturing space
- **Soft Coral** `#E8A598` - Gentle energy, encouragement, warmth

### Supporting Colors

- **Dusty Blue** `#7D8DC1` - Trust, reliability, calm confidence
- **Warm Gray** `#A69B95` - Grounded, practical, approachable expertise
- **Golden Honey** `#E6B866` - Hope, optimism, small celebrations

### Accent Colors

- **Forest Green** `#4A5D3A` - For serious information, depth
- **Terracotta** `#B7704F` - For call-to-action elements

### Color Usage Guidelines

- Use Sage Green for primary actions and growth-related elements
- Warm Cream for backgrounds and safe spaces
- Soft Coral for encouragement and gentle interactions
- Forest Green for important information and depth
- Terracotta for urgent or primary CTAs
- Avoid harsh contrasts - maintain warmth and approachability

## Typography

### Primary Typeface (Headlines/Branding)

**"The Seasons" font from Canva** - As specified in project requirements

- Friendly yet professional
- Excellent readability
- Modern but not trendy
- Conveys competence without intimidation

### Secondary Typeface (Body Text)

**Georgia or Crimson Text** (serif)

- Serif for warmth and approachability
- High readability for longer content
- Feels personal and trustworthy
- Good for storytelling elements

### Supporting Typeface (UI/Data)

**Inter or Open Sans** (sans-serif)

- Clean, functional for forms and technical information
- Ensures accessibility and clarity

### Typography Hierarchy

- **Display/Headlines**: Large, bold, using primary typeface
- **Subheads**: Medium weight, clear hierarchy
- **Body Text**: Comfortable reading size, good line height
- **UI Elements**: Clear, functional, accessible

## Visual Style & Imagery

### Photography Style

- Real families in natural, unposed moments
- Soft, natural lighting
- Focus on hands, connections, small interactions
- Kitchen settings, home environments
- Diverse representation of families
- Children looking confident and happy

### Illustration Style

- Simple, friendly line drawings
- Hand-drawn feel (not overly polished)
- Infographic elements that feel approachable
- Step-by-step visual guides
- Progress indicators that feel celebratory

### Iconography

- Rounded, soft edges
- Organic shapes when possible
- Simple but distinctive
- Consistent stroke weight
- Subtle use of brand colors

## Brand Elements

### Logo Approach

- Wordmark with subtle symbol
- Could incorporate growth imagery (subtle leaf, arrow, or path)
- Approachable typography
- Versatile for digital and print

### Patterns/Graphics

- Organic, flowing lines suggesting progress/journey
- Subtle textures reminiscent of home/comfort
- Growth motifs (branches, paths, stepping stones)
- Avoid anything too clinical or sterile

## Application Guidelines

### Website Design

- **Spacious, breathable layouts** - Plenty of white space using warm cream
- **Cards/sections with soft rounded corners** - Avoid sharp edges
- **Progress indicators that feel encouraging** - Celebrate milestones
- **Testimonials prominently featured** - Social proof and community
- **Smooth animations** - Gentle, purposeful transitions (500ms duration)
- **Accessible design** - High contrast, readable fonts, keyboard navigation

### Button Design

- **Rounded corners** - Use `rounded-full` for primary CTAs
- **Sage Green primary** - `#87A96B` for main actions
- **Subtle shadows** - `shadow-lg shadow-black/20` for depth
- **Smooth animations** - Scale and glow effects on hover
- **Gentle transitions** - 500ms duration with ease-out timing

### Communication Style

- **Headlines**: "Your family's food freedom journey starts here"
- **Subheads**: "Small steps, big progress, together"
- **CTAs**: "Take the next step" not "Start protocol"
- **Error Messages**: Gentle, supportive, solution-focused

### Packaging/Materials

- Matte finishes over glossy
- Natural paper textures
- Soft color gradients
- Hand-lettered accents for warmth

## Technical Implementation

### CSS Custom Properties

```css
:root {
  --primary-sage: #87a96b;
  --primary-cream: #f7f5f0;
  --primary-coral: #e8a598;
  --supporting-blue: #7d8dc1;
  --supporting-gray: #a69b95;
  --supporting-honey: #e6b866;
  --accent-forest: #4a5d3a;
  --accent-terracotta: #b7704f;
}
```

### Animation Standards

- **Duration**: 500ms for most transitions
- **Easing**: `ease-out` for natural feel
- **Hover Effects**: Subtle scale (105%) and glow
- **Loading States**: Gentle, non-intrusive
- **Micro-interactions**: Celebrate user actions

### Accessibility Requirements

- **Color Contrast**: WCAG AA compliance
- **Focus States**: Clear, visible focus indicators
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper semantic markup
- **Motion**: Respect `prefers-reduced-motion`

## Quality Checklist

Before implementing any design change, ensure:

- [ ] Colors align with brand palette
- [ ] Typography uses specified fonts
- [ ] Tone of voice is conversational and encouraging
- [ ] Animations are smooth and purposeful (500ms)
- [ ] Accessibility standards are met
- [ ] Visual hierarchy supports user goals
- [ ] Design feels warm and approachable
- [ ] No clinical or sterile elements
- [ ] Progress and success are celebrated
- [ ] Content empowers rather than intimidates

## Brand Promise

Soothly feels like a supportive friend with expertise - someone who's been there, understands the challenges, and genuinely believes in your family's ability to succeed. Every design decision should reinforce this promise of nurturing competence and optimistic empowerment.

---

_This document should be referenced for all design decisions and updated as the brand evolves._
