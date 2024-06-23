const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    test('Translate Mangoes are my favorite fruit. to British English', (done) => {
        const text = 'Mangoes are my favorite fruit.';
        const translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate I ate yogurt for breakfast. to British English', (done) => {
        const text = 'I ate yogurt for breakfast.';
        const translation = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate We had a party at my friend\'s condo. to British English', (done) => {
        const text = 'We had a party at my friend\'s condo.';
        const translation = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
        const text = 'Can you toss this in the trashcan for me?';
        const translation = 'Can you toss this in the <span class="highlight">bin</span> for me?';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate The parking lot was full. to British English', (done) => {
        const text = 'The parking lot was full.';
        const translation = 'The <span class="highlight">car park</span> was full.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate Like a high tech Rube Goldberg machine. to British English', (done) => {
        const text = 'Like a high tech Rube Goldberg machine.';
        const translation = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate To play hooky means to skip class or work. to British English', (done) => {
        const text = 'To play hooky means to skip class or work.';
        const translation = 'To <span class="highlight">bunk off</span> means to skip class or work.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate No Mr. Bond, I expect you to die. to British English', (done) => {
        const text = 'No Mr. Bond, I expect you to die.';
        const translation = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate Dr. Grosh will see you now. to British English', (done) => {
        const text = 'Dr. Grosh will see you now.';
        const translation = '<span class="highlight">Dr</span> Grosh will see you now.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate Lunch is at 12:15 today. to British English', (done) => {
        const text = 'Lunch is at 12:15 today.';
        const translation = 'Lunch is at <span class="highlight">12.15</span> today.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Translate We watched the footie match for a while. to American English', (done) => {
        const text = 'We watched the footie match for a while.';
        const translation = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate Paracetamol takes up to an hour to work. to American English', (done) => {
        const text = 'Paracetamol takes up to an hour to work.';
        const translation = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate First, caramelise the onions. to American English', (done) => {
        const text = 'First, caramelise the onions.';
        const translation = 'First, <span class="highlight">caramelize</span> the onions.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate I spent the bank holiday at the funfair. to American English', (done) => {
        const text = 'I spent the bank holiday at the funfair.';
        const translation = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate I had a bicky then went to the chippy. to American English', (done) => {
        const text = 'I had a bicky then went to the chippy.';
        const translation = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate I\'ve just got bits and bobs in my bum bag. to American English', (done) => {
        const text = 'I\'ve just got bits and bobs in my bum bag.';
        const translation = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
        const text = 'The car boot sale at Boxted Airfield was called off.';
        const translation = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate Have you met Mrs Kalyani? to American English', (done) => {
        const text = 'Have you met Mrs Kalyani?';
        const translation = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate Prof Joyner of King\'s College, London. to American English', (done) => {
        const text = 'Prof Joyner of King\'s College, London.';
        const translation = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
        const text = 'Tea time is usually around 4 or 4.30.';
        const translation = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Highlight translation in Mangoes are my favorite fruit.', (done) => {
        const text = 'Mangoes are my favorite fruit.';
        const translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Highlight translation in I ate yogurt for breakfast.', (done) => {
        const text = 'I ate yogurt for breakfast.';
        const translation = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
        assert.equal(translator.translate(text, 'american-to-british'), translation);
        done();
      });
    
      test('Highlight translation in We watched the footie match for a while.', (done) => {
        const text = 'We watched the footie match for a while.';
        const translation = 'We watched the <span class="highlight">soccer</span> match for a while.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
    
      test('Highlight translation in Paracetamol takes up to an hour to work.', (done) => {
        const text = 'Paracetamol takes up to an hour to work.';
        const translation = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
        assert.equal(translator.translate(text, 'british-to-american'), translation);
        done();
      });
});
