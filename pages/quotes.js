import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Luke Reynolds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Quotes</h1>
        <div>
        <br /><br />
          <div className={styles.picture}>
            <Image src="/socrates.jpg" alt="Socrates" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Socrates&nbsp;</h3><p className={styles.info}>(Philosopher, 470 - 399 BC)</p>
            <ul className={styles.descriptionLeft}>
              <li>Strong minds discuss ideas, average minds discuss events, and weak minds discuss people.</li>
              <li>An unexamined life is not worth living.</li>
              <li>True knowledge exists in knowing that you know nothing.</li>
              <li>Beware the barrenness of a busy life.</li>
              <li>When the debate is over, slander becomes the tool of the loser.</li>
              <li>To find yourself, think for yourself.</li>
              <li>I cannot teach anybody anything, I can only make them think.</li>
              <li>Education is the kindling of a flame, not the filling of a vessel.</li>
              <li>There is only one good, knowledge, and one evil, ignorance.</li>
              <li>Death may be the greatest of all human blessings.</li>
              <li>Falling is not a failure, failure comes when you stay where you have fallen.</li>
              <li>Let him that would move the world first move himself.</li>
              <li>Be slow to fall into friendship; but when thou art in, continue firm and constant.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/plato.jpg" alt="Plato" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Plato&nbsp;</h3><p className={styles.info}>(Philosopher, 428 - 348 BC)</p>
            <ul className={styles.descriptionLeft}>
              <li>Only the dead have seen the end of war.</li>
              <li>Wise men talk because they have something to say; fools, because they have to say something.</li>
              <li>Necessity is the mother of invention.</li>
              <li>Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.</li>
              <li>Be kind, for everyone you meet is fighting a hard battle.</li>
              <li>At the touch of love everyone becomes a poet.</li>
              <li>The measure of a man is what he does with power.</li>
              <li>We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.</li>
              <li>You can discover more about a person in an hour of play than in a year of conversation.</li>
              <li>One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors.</li>
            </ul>
          </div><br /><br/>
          <div className={styles.picture}>
            <Image src="/aristotle.jpg" alt="Aristotle" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Aristotle&nbsp;</h3><p className={styles.info}>(Philosopher, 384 - 322 BC)</p>
            <ul className={styles.descriptionLeft}>
              <li>We are what we repeatedly do. Excellence, then, is not an act, but a habit.</li>
              <li>The whole is more than the sum of its parts.</li>
              <li>It is the mark of an educated mind to be able to entertain a thought without accepting it.</li>
              <li>Educating the mind without educating the heart is no education at all.</li>
              <li>Happiness depends upon ourselves.</li>
              <li>Pleasure in the job puts perfection in the work.</li>
              <li>A friend to all is a friend to none.</li>
              <li>The law is reason, free from passion.</li>
              <li>Poverty is the parent of revolution and crime.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/caesar.jpg" alt="Caesar" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Julius Caesar&nbsp;</h3><p className={styles.info}>(Emperor/General, 100 - 44 BC)</p>
            <ul className={styles.descriptionLeft}>
              <li>It is easier to find men who will volunteer to die, than to find those willing to endure pain with patience.</li>
              <li>Men willingly believe what they wish.</li>
              <li>Experience is the teacher of all things.</li>
            </ul>
          </div><br/><br /><br/>
          <div className={styles.picture}>
            <Image src="/aquinas.jpg" alt="Aquinas" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Saint Thomas Aquinas&nbsp;</h3><p className={styles.info}>(Philosopher/Priest, 1225 - 1274)</p>
            <ul className={styles.descriptionLeft}>
              <li>To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.</li>
              <li>The things that we love tell us what we are.</li>
              <li>There is nothing on this earth more to be prized than true friendship.</li>
              <li>I would rather feel compassion than know the meaning of it.</li>
              <li>Beware the person of one book.</li>
              <li>Sorrow can be alleviated by good sleep, a bath and a glass of wine.</li>
              <li>Faith has to do with things that are not seen and hope with things that are not at hand.</li>
              <li>Better to illuminate than merely to shine, to deliver to others contemplated truths than merely to contemplate.</li>
              <li>Friendship is the source of the greatest pleasures, and without friends even the most agreeable pursuits become tedious.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/davinci.jpg" alt="Leonardo Da Vinci" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Leonardo Da Vinci&nbsp;</h3><p className={styles.info}>(Painter/Engineer, 1452 - 1519)</p>
            <ul className={styles.descriptionLeft}>
              <li>Learning never exhausts the mind.</li>
              <li>There are three classes of people: those who see, those who see when they are shown, those who do not see.</li>
              <li>Poor is the pupil who does not surpass his master</li>
              <li>Where there is shouting, there is no true knowledge.</li>
              <li>The noblest pleasure is the joy of understanding.</li>
              <li>I love those who can smile in trouble, who can gather strength from distress, and grow brave by reflection. 'Tis the business of little minds to shrink, but they whose heart is firm, and whose conscience approves their conduct, will pursue their principles unto death.</li>
              <li>Men of lofty genius sometimes accomplish the most when they work least, for their minds are occupied with their ideas and the perfection of their conceptions, to which they afterwards give form.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/shakespeare.jpg" alt="Shakespeare" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>William Shakespeare&nbsp;</h3><p className={styles.info}>(Playwright/Actor, 1564 - 1616)</p>
            <ul className={styles.descriptionLeft}>
              <li>To thine own self, be true</li>
              <li>Love all, trust few, do wrong to none.</li>
              <li>Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.</li>
              <li>The lady doth protest too much, methinks.</li>
              <li>The course of true love never did run smooth.</li>
              <li>The fool doth think he is wise, but the wise man knows himself to be a fool.</li>
              <li>Tis better to have loved and lost, than never to have loved at all.</li>
              <li>All that glitters is not gold.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/locke.jpg" alt="Locke" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>John Locke&nbsp;</h3><p className={styles.info}>(Philosopher/Physician, 1632 - 1704)</p>
            <ul className={styles.descriptionLeft}>
              <li>Mankind, being all equal and independent, no one ought to harm another in his life, health, liberty or possessions.</li>
              <li>We are like chameleons, we take our hue and the color of our moral character, from those who are around us.</li>
              <li>What worries you, masters you.</li>
              <li>Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.</li>
              <li>The actions of people are the best way to interprete their thoughts.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/newton.jpg" alt="Newton" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Sir Isaac Newton&nbsp;</h3><p className={styles.info}>(Physicist/Mathematician, 1642 - 1727)</p>
            <ul className={styles.descriptionLeft}>
              <li>If I have seen further than others, it is by standing upon the shoulders of giants.</li>
              <li>To each action there is an equal and opposite reaction. </li>
              <li>Tact is the knack of making a point without making an enemy.</li>
              <li>A man may imagine things that are false, but he can only understand things that are true, for if the things are false, the apprehension of them is not understanding.</li>
              <li>If I am anything, which I highly doubt, I have made myself so by hard work.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/hume.jpg" alt="Hume" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>David Hume&nbsp;</h3><p className={styles.info}>(Philosopher, 1711 - 1776)</p>
            <ul className={styles.descriptionLeft}>
              <li>Beauty in things exists in the mind which contemplates them.</li>
              <li>A wise man proportions his belief to the evidence.</li>
              <li>Truth springs from argument amongst friends.</li>
              <li>Generally speaking, the errors in religion are dangerous; those in philosophy only ridiculous.</li>
              <li>Be a philosopher but, amidst all your philosophy, be still a man.</li>
              <li>Custom is the great guide to human life.</li>
              <li>It is seldom that liberty of any kind is lost all at once.</li>
              <li>He is happy whom circumstances suit his temper; but he is more excellent who suits his temper to any circumstance.</li>
              <li>Heaven and hell suppose two distinct species of men, the good and the bad. But the greatest part of mankind float betwixt vice and virtue.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/kant.jpg" alt="Kant" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Immanuel Kant&nbsp;</h3><p className={styles.info}>(Philosopher, 1724 - 1804)</p>
            <ul className={styles.descriptionLeft}>
              <li>He who is cruel to animals becomes hard also in his dealings with men. We can judge the heart of a man by his treatment of animals.</li>
              <li>Science is organized knowledge. Wisdom is organized life.</li>
              <li>Seek not the favour of the multitude; it is seldom got by honest and lawful means. But seek the testimony of few; and number not voices, but weigh them.</li>
              <li>All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.</li>
              <li>Experience without theory is blind, but theory without experience is mere intellectual play.</li>
              <li>It is beyond a doubt that all our knowledge begins with experience.</li>
              <li>Thoughts without content are empty, intuitions without concepts are blind.</li>
              <li>Morality is not properly the doctrine of how we may make ourselves happy, but how we may make ourselves worthy of happiness.</li>
              <li>Live your life as though your every act were to become a universal law.</li>
              <li>Happiness is not an ideal of reason, but of imagination.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/emerson.jpg" alt="Emerson" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Ralph Waldo Emerson&nbsp;</h3><p className={styles.info}>(Philosopher, 1803 - 1882)</p>
            <ul className={styles.descriptionLeft}>
              <li>To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.</li>
              <li>Is it so bad then to be misunderstood? Pythagoras was misunderstood, and Socrates, and Jesus, and Luther, and Copernicus, and Galileo, and Newton, and every pure and wise spirit that ever took flesh. To be great is to be misunderstood.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/twain.jpg" alt="Twain" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Samuel Clemens aka Mark Twain&nbsp;</h3><p className={styles.info}>(Writer/Entrepreneur, 1835 - 1910)</p>
            <ul className={styles.descriptionLeft}>
              <li>Whenever you find yourself on the side of the majority, it is time to pause and reflect.</li>
              <li>Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.</li>
              <li>If you don't read the newspaper, you're uninformed. If you read the newspaper, you're mis-informed.</li>
              <li>Travel is fatal to prejudice, bigotry, and narrow-mindedness, and many of our people need it sorely on these accounts. Broad, wholesome, charitable views of men and things cannot be acquired by vegetating in one little corner of the earth all one's lifetime.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/nietzsche.jpg" alt="Nietzsche" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Friedrich Nietzsche&nbsp;</h3><p className={styles.info}>(Philosopher, 1844 - 1900)</p>
            <ul className={styles.descriptionLeft}>
              <li>I undertook something that not everyone may undertake: I descended into the depths, I bored into the foundations.</li>
              <li>Whoever fights monsters should see to it that in the process he does not become a monster. And if you gaze long enough into an abyss, the abyss will gaze back into you.</li>
              <li>Sometimes people don't want to hear the truth because they don't want their illusions destroyed.</li>
              <li>He who has a why to live for can bear almost any how.</li>
              <li>The individual has always had to struggle to keep from being overwhelmed by the tribe. If you try it, you will be lonely often, and sometimes frightened. But no price is too high to pay for the privilege of owning yourself.</li>
              <li>When we are tired, we are attacked by ideas we conquered long ago.</li>
              <li>The surest way to corrupt a youth is to instruct him to hold in higher esteem those who think alike than those who think differently.</li>
              <li>That which does not kill us makes us stronger.</li>
              <li>I am a forest, and a night of dark trees: but those who are not afraid of my darkness, will find banks full of roses under my cypresses.</li>
              <li>In individuals, insanity is rare; but in groups, parties, nations, and epochs it is the rule</li>
              <li>You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist.</li>
            </ul>
          </div><br/><br/>
          <div className={styles.picture}>
            <Image src="/bell.jpg" alt="Bell" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Alexander Graham Bell&nbsp;</h3><p className={styles.info}>(Inventor/Scientist, 1847 - 1922)</p>
            <ul className={styles.descriptionLeft}>
              <li>When one door closes, another one opens. However we often look so long and so regretfully on the closed door, that we do not see the ones which open for us.</li>
              <li>The only difference between success and failure is the ability to take action.</li>
              <li>Night is a more quiet time to work. It aids thought.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/wilde.jpg" alt="Wilde" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Oscar Wilde&nbsp;</h3><p className={styles.info}>(Poet/Playwright, 1854 - 1900)</p>
            <ul className={styles.descriptionLeft}>
              <li>Imitation is the sincerest form of flattery that mediocrity can pay to greatness.</li>
              <li>Sarcasm is the lowest form of wit, but the highest form of intelligence.</li>
              <li>What is a cynic? A man who knows the price of everything and the value of nothing.</li>
              <li>Patriotism is the virtue of the vicious.</li>
              <li>Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.</li>
              <li>A good friend will always stab you in the front.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/freud.jpg" alt="Freud" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Sigmund Freud&nbsp;</h3><p className={styles.info}>(Neurologist/Psychoanalyst, 1856 - 1939)</p>
            <ul className={styles.descriptionLeft}>
              <li>One day, in retrospect, the years of struggle will strike you as the most beautiful.</li>
              <li>Being entirely honest with oneself is a good exercise.</li>
              <li>The interpretation of dreams is the royal road to a knowledge of the unconscious activities of the mind.</li>
              <li>The mind is like an iceberg, it floats with one-seventh of its bulk above water.</li>
              <li>How bold one gets when one is sure of being loved.</li>
              <li>From error to error one discovers the entire truth.</li>
              <li>We are never so defenceless against suffering as when we love.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/tesla.jpg" alt="Tesla" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Nicola Tesla&nbsp;</h3><p className={styles.info}>(Physicist/Electrical Engineer, 1856 - 1943)</p>
            <ul className={styles.descriptionLeft}>
              <li>The scientists of today think deeply instead of clearly. One must be sane to think clearly, but one can think deeply and be quite insane.</li>
              <li>Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.</li>
              <li>Today's scientists have substituted mathematics for experiments, and they wander off through equation after equation, and eventually build a structure which has no relation to reality.</li>
              <li>The spread of civilisation may be likened to a fire; first, a feeble spark, next a flickering flame, then a mighty blaze, ever increasing in speed and power.</li>
            </ul>
          </div><br/><br /><br/>
          <div className={styles.picture}>
            <Image src="/shaw.jpg" alt="Shaw" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Bernard Shaw&nbsp;</h3><p className={styles.info}>(Playwright/Activist, 1856 - 1950)</p>
            <ul className={styles.descriptionLeft}>
              <li>If you can't get rid of the skeleton in your closet, you'd best teach it to dance.</li>
              <li>If you're going to tell people the truth, make them laugh, otherwise they'll kill you.</li>
              <li>There are no secrets except the secrets that keep themselves.</li>
              <li>The single biggest problem in communication is the illusion that it has taken place.</li>
            </ul>
          </div><br/><br /><br/>
          <div className={styles.picture}>
            <Image src="/gandhi.jpg" alt="Gandhi" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Mahatma Gandhi&nbsp;</h3><p className={styles.info}>(Activist/Lawyer, 1869 - 1948)</p>
            <ul className={styles.descriptionLeft}>
              <li>An eye for an eye leaves the whole world blind.</li>
              <li>You must not lose faith in humanity. Humanity is an ocean; if a few drops of the ocean are dirty, the ocean does not become dirty.</li>
              <li>The weak can never forgive. Forgiveness is the attribute of the strong.</li>
              <li>Strength does not come from physical capacity. It comes from an indomitable will.</li>
              <li>Happiness is when what you think, what you say, and what you do are in harmony.</li>
              <li>They may torture my body, break my bones, even kill me. Then they will have my dead body, but not my obedience.</li>
              <li>First they ignore you, then they laugh at you, then they fight you, then you win.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/\ill.jpg" alt="Churchill" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Sir Winston Churchill&nbsp;</h3><p className={styles.info}>(Prime Minister/Politician, 1874 - 1965)</p>
            <ul className={styles.descriptionLeft}>
              <li>If you are going through hell, keep going.</li>
              <li>A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.</li>
              <li>The best argument against democracy is a 5 minute conversation with the average voter.</li>
              <li>The truth is incontrovertible. Panic may resent it, ignorance may deride it, malice may distort it, but there it is.</li>
              <li>Success is not final; failure is not fatal: It is the courage to continue that counts.</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/einstein.jpg" alt="Einstein" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Albert Einstein&nbsp;</h3><p className={styles.info}>(Physicist/Philosopher, 1879 - 1955)</p>
            <ul className={styles.descriptionLeft}>
              <li>Imagination is more important than knowledge.</li>
              <li>Reality is merely an illusion, albeit a very persistent one.</li>
              <li>Insanity: doing the same thing over and over again and expecting different results.</li>
              <li>There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.</li>
              <li>The prestige of government has undoubtedly been lowered considerably by the prohibition law. For nothing is more destructive of respect for the government and the law of the land than passing laws which cannot be enforced. It is an open secret that the dangerous increase of crime in this country is closely connected with this.</li>
              <li>No problem can be solved from the same level of consciousness that created it.</li>
              <li>Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.</li>
              <li>Life is like riding a bicycle. To keep your balance you must keep moving.</li>
              <li>Try not to become a man of success, but rather try to become a man of value.</li>
              <li>Look deep into nature, and then you will understand everything better.</li>
              <li>I have no special talents. I am only passionately curious.</li>
              <li>If the facts don't fit the theory, change the facts.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/roosevelt.jpg" alt="Roosevelt" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Franklin D. Roosevelt&nbsp;</h3><p className={styles.info}>(President/Politician, 1882 - 1945)</p>
            <ul className={styles.descriptionLeft}>
              <li>The only thing we have to fear is fear itself.</li>
              <li>Calm seas never made a good sailor.</li>
              <li>Courage is not the absence of fear, but rather the assessment that something else is more important than fear.</li>
              <li>The liberty of a democracy is not safe if the people tolerated the growth of private power to a point where it becomes stronger than the democratic state itself. That in its essence is fascism: ownership of government by an individual, by a group, or any controlling private power.</li>
              <li>True individual freedom cannot exist without economic security and independence. People who are hungry and out of a job are the stuff of which dictatorships are made.</li>
              <li>Remember, remember always, that all of us, and you and I especially, are descended from immigrants and revolutionists.</li>
              <li>We are a nation of many nationalities, many races, many religions-bound together by a single unity, the unity of freedom and equality. Whoever seeks to set one nationality against another, seeks to degrade all nationalities.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/orwell.jpg" alt="Orwell" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Eric Arthur Blair aka George Orwell&nbsp;</h3><p className={styles.info}>(Author/Journalist, 1903 - 1950)</p>
            <ul className={styles.descriptionLeft}>
              <li>The further a society drifts from the truth the more it will hate those who speak it.</li>
              <li>In a time of universal deceit telling the truth is a revolutionary act.</li>
              <li>War is peace. Freedom is slavery. Ignorance is strength.</li>
              <li>Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them.</li>
              <li>Until they become conscious they will never rebel, and until after they have rebelled they cannot become conscious.</li>
              <li>I have seen British imperialism at work in Burma, and I have seen something of the effects of poverty and unemployment in Britian... One has got to be actively a socialist, not merely sympathetic to socialism, or one plays into the hands of our always active enemies.</li>
              <li>The central problem - how to prevent power from being abused - remains unsolved. Dickens, who had not the vision to see that private property is an obstructive nuisance, had the vision to see that: 'If men would behave decently the world would be decent' is not such a platitude as it sounds.</li>
              <li>Who controls the past controls the future. Who controls the present controls the past.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/seuss.jpg" alt="Seuss" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Dr Seuss&nbsp;</h3><p className={styles.info}>(Author/Cartoonist, 1904 - 1991)</p>
            <ul className={styles.descriptionLeft}>
              <li>Don’t cry because it’s over, smile because it happened.</li>
              <li>You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.</li>
              <li>The more that you read, the more things you will know. The more that you learn, the more places you’ll go.</li>
            </ul>
          </div><br/><br /><br/>
          <div className={styles.picture}>
            <Image src="/mandela.jpg" alt="Mandela" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Nelson Mandela&nbsp;</h3><p className={styles.info}>(President/Revolutionary, 1918 - 2013)</p>
            <ul className={styles.descriptionLeft}>
              <li>Real leaders must be ready to sacrifice all for the freedom of their people.</li>
              <li>While poverty persists, there is no true freedom</li>
              <li>It always seems impossible until it's done.</li>
              <li>A fundamental concern for others in our individual and community lives would go a long way in making the world the better place we so passionately dreamt of.</li>
              <li>Resentment is like drinking poison and then hoping it will kill your enemies.</li>
              <li>I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.</li>
              <li>Education is the most powerful weapon which you can use to change the world.</li>
              <li>Everyone can rise above their circumstances and achieve success if they are dedicated to and passionate about what they do.</li>
              <li>I like friends who have independent minds because they tend to make you see problems from all angles.</li>
              <li>Do not judge me by my successes, judge me by how many times I fell down and got back up again.</li>
              <li>For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.</li>
              <li>A critical, independent and investigative press is the lifeblood of any democracy. The press must be free from state interference. It must have the economic strength to stand up to the blandishments of government officials. It must have sufficient independence from vested interests to be bold and inquiring without fear or favour. It must enjoy the protection of the constitution, so that it can protect our rights as citizens.</li>
              <li>It is not our diversity which divides us; it is not our ethnicity, or religion or culture that divides us. Since we have achieved our freedom, there can only be one division amongst us: between those who cherish democracy and those who do not.</li>
              <li>No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.</li>
              <li>There can be no greater gift than that of giving one’s time and energy to help others without expecting anything in return.</li>
              <li>When a man is denied the right to live the life he believes in, he has no choice but to become an outlaw.</li>
              <li>We must use time wisely and forever realize that the time is always ripe to do right.</li>
              <li>A winner is a dreamer who never gives up.</li>
              <li>I never lose. I either win or learn.</li>
            </ul>
          </div><br /><br /><br/>
          <div className={styles.picture}>
            <Image src="/mlk.jpg" alt="MLK" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Martin Luther King&nbsp;</h3><p className={styles.info}>(Activist/Philosopher, 1929 - 1968)</p>
            <ul className={styles.descriptionLeft}>
              <li>Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.</li>
              <li>Freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed.</li>
              <li>Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.</li>
              <li>Injustice anywhere is a threat to justice everywhere.</li>
              <li>Our lives begin to end the day we become silent about things that matter.</li>
              <li>In the end, we will remember not the words of our enemies, but the silence of our friends.</li>
            </ul>
          </div><br/><br /><br/>
          <div className={styles.picture}>
            <Image src="/joker.jpeg" alt="The Joker" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>The Joker&nbsp;</h3><p className={styles.info}>(Anarchist/Fictional Character, 1940+)</p>
            <ul className={styles.descriptionLeft}>
              <li>You cant sell dreams to someone who has walked through nightmares.</li>
              <li>The worst part about having a mental illness is people expect you to behave as if you don’t.</li>
              <li>Their morals, their code; it's a bad joke. Dropped at the first sign of trouble. They're only as good as the world allows them to be. You'll see- I'll show you. When the chips are down these, uh, civilized people? They'll eat each other. See I'm not a monster, I'm just ahead of the curve.</li>
              <li>For my whole life, I didn't know if I even really existed. But I do, and people are starting to notice.</li>
              <li>How 'bout another joke, Murray? What do you get... when you cross... a mentally ill loner with a society that abandons him and treats him like trash? I'll tell you what you get! You get what you fuckin' deserve!</li>
              <li>Nobody panics when things go “according to plan”. Even if the plan is horrifying!</li>
              <li>Madness is the emergency exit. You can just step outside, and close the door on all those dreadful things that happened. You can lock them away… forever.</li>
              <li>They need you right now, but when they don’t, they’ll cast you out like a leper!</li>
              <li>As you know, madness is like gravity…all it takes is a little push.</li>
              <li>The strongest hearts have the most scars!</li>
              <li>Give a man a mask and he will become his true self.</li>
              <li>We stopped checking for monsters under our bed, when we realized they were inside us.</li>
              <li>The pen, is truly mightier than the sword!</li>
            </ul>
          </div><br/><br /><br/>
          <div className={styles.picture}>
            <Image src="/hawking.jpg" alt="Hawking" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Stephen Hawking&nbsp;</h3><p className={styles.info}>(Physicist, 1942 - 2018)</p>
            <ul className={styles.descriptionLeft}>
              <li>I have noticed that even those who assert that everything is predestined and that we can change nothing about it still look both ways before they cross the street.</li>
              <li>Quiet people have the loudest minds.</li>
              <li>The thing about smart people is that they seem like crazy people to dumb people.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/marley.jpg" alt="Marley" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Bob Marley&nbsp;</h3><p className={styles.info}>(Singer/Songwriter, 1945 - 1981)</p>
            <ul className={styles.descriptionLeft}>
              <li>If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy.</li>
              <li>Love the life you live. live the life you love.</li>
              <li>None but ourselves can free our minds.</li>
              <li>The truth is, everyone is going to hurt you. You've just got to find the ones worth suffering for.</li>
              <li>The greatness of a man is not in how much wealth he acquires, but in his integrity and his ability to affect those around him positively.</li>
              <li>Don't worry about a thing, 'cause every little thing's gonna be all right.</li>
            </ul>
          </div><br /><br />
          <div className={styles.picture}>
            <Image src="/williams.jpg" alt="Williams" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Robin Williams&nbsp;</h3><p className={styles.info}>(Comedian/Actor, 1951 - 2014)</p>
            <ul className={styles.descriptionLeft}>
              <li>I used to think the worst thing in life was ending up alone. It's not. The worst thing in life is ending up with people that make you feel alone.</li>
              <li>No matter what anybody tells you, words and ideas can change the world.</li>
              <li>You're only given one spark of madness, you mustn't lose it.</li>
              <li>You don't know about real loss, 'cause it only occurs when you've loved something more than you love yourself. And I doubt you've ever dared to love anybody that much</li>
            </ul>
          </div><br/><br />
          <div className={styles.picture}>
            <Image src="/startrek.jpg" alt="Star Trek" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Star Trek&nbsp;</h3><p className={styles.info}>(Science Fiction Show, 1966+)</p>
            <ul className={styles.descriptionLeft}>
              <li>If you pull at the loose threads of your self, you will unwind the tapestry of your life. - Picard</li>
              <li>The line must be drawn here, this far, no farther. - Picard</li>
              <li>It is possible to commit no mistakes and still lose. That is not a weakness. That is life. - Picard</li>
              <li>The needs of the many outweigh the needs of the few or the one. - Spock</li>
              <li>Live long and prosper - Spock</li>
              <li>After a time, you may find that having is not so pleasing a thing after all as wanting. It is not logical, but it is often true. - Spock</li>
              <li>I believe in coincidences. Coincidences happen every day. But I don't trust coincidences. - Garak</li>
              <li>Everyone once in a while, declare peace with your enemies. It confuses the hell out of em - Quark</li>
              <li>One man can summon the future - T'Pol</li>
              <li>Challenge your preconceptions, or they will challenge you. - Trip</li>
              <li>In accepting the inevitable, one finds peace - Tuvok</li>
              <li>The greatest battles a warrior will ever fight take place in his mind. - Worf</li>
            </ul>
          </div><br /><br /><br/>
          <div className={styles.picture}>
            <Image src="/assorted.jpg" alt="Assorted" width={180} height={180} />
          </div>
          <div className={styles.content}>
            <h3 className={styles.noTopMargin}>Assorted</h3>
            <ul className={styles.descriptionLeft}>
              <li>Every path is the right path. Everything could have been anything else and it would have just as much meaning. - Mr Nobody</li>
              <li>In chess, it's called Zugzwang... when the only viable move... is not to move. - Mr Nobody</li>
              <li>Chess is won, one step at a time. - Mr Nobody</li>
              <li>I would rather have people hate me for who I am, than love me for who I am not - Kurt Cobain</li>
              <li>I feel stupid, and contagious. - Kurt Cobain</li>
              <li>Never argue with an idiot. They will only bring you down to their level and beat you with experience. - George Carlin</li>
              <li>It's Called the American Dream Because You Have to be Asleep to Believe It - George Carlin</li>
              <li>In a just cause the weak will beat the strong. - Sophocles</li>
              <li>To be wise is to suffer. - Sophocles</li>
              <li>No one is truly free, they are a slave to wealth, fortune, the law, or other people restraining them from acting according to their will. - Euripides</li>
              <li>He who learns must suffer, and even in our sleep pain that cannot forget falls drop by drop upon the heart. - Aeschylus</li>
              <li>It is always darkest just before the dawn. - Thomas Fuller</li>
              <li>Patience is a virtue. - Piers Plowman</li>
              <li>The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts. - Bertrand Russell</li>
              <li>Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth. - Sherlock Holmes</li>
              <li>Truth is like poetry. And most people hate poetry. - Michael Lewis</li>
              <li>Do, or do not. There is no try. - Yoda</li>
              <li>Beware the fury of a patient man. - John Dryden</li>
              <li>It may be the warriors who get the glory but it's the engineer's who build societies. - Snow Piercer</li>
              <li>Thinking is difficult, that's why most people judge. - Carl Jung</li>
              <li>You wouldn't worry so much about what others think of you if you realised how seldom they do. - Eleanor Roosevelt</li>
              <li>If you strike me down I shall become more powerful than you can possibly imagine. - Obi Wan Kenobi</li>
              <li>The young don't know enough to be prudent, and therefore they attempt the impossible-and achieve it, generation after generation. - Pearl Buck</li>
              <li>Diplomacy is the art of saying "nice doggy" until you can find a rock. - Will Rogers</li>
              <li>Don't mistake my kindness for weakness. I am kind to everyone, but when someone is unkind to me, weak is not what you are going to remember about me. - Al Capone</li>
              <li>We must believe in free will, we have no choice. - Isaac Bashevis Singer</li>
              <li>The distance between insanity and genius is measured only by success. - Ian Fleming</li>
              <li>I imagine one of the reasons people cling to their hates so stubbornly is because they sense that once hate is gone, they will be forced to deal with pain. - James Baldwin</li>
              <li>The best teachers are those who show you where to look, but don't tell you what to see. - Alexandra K Trenfor</li>
              <li>Nationalism is our form of incest, is our idolatry, is our insanity. 'Patriotism' is its cult... Just as love for one individual which excludes the love for others is not love, love for one's country which is not part of one's love for humanity is not love but idolatrous worship. - Eric Fromm</li>
              <li>When I was poor and complained about inequality they said I was bitter; now that I'm rich and I complain about inequality they say I'm a hypocrite. I'm beginning to think they just don't want to talk about inequality. - Russel Brand</li>
              <li>When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist. - Dom Helder Camara</li>
              <li>You can tell the greatness of a man by what makes him angry. - Abraham Lincoln</li>
              <li>If you have been brutally broken but still have the courage to be gentle to other living beings, then you're a badass with the heart of an angel. - Keanu Reeves</li>
              <li>Less is more. - Ludwig Mies van der Rohe</li>
              <li>If you're not careful the papers will have you hating the people who are getting oppressed and loving the people who are doing the oppressing. - Malcolm X</li>
              <li>When exposing a crime is treated as committing a crime, you are being ruled by criminals. - Edward Snowden</li>
              <li>You're not here to make the choice; you've already made it. You're here to understand why you make that choice. - The Matrix</li>
              <li>Salvation comes in the blink of an eye. - Final Space</li>
              <li>First they came for the socialists, and I did not speak out—because I was not a socialist. Then they came for the trade unionists, and I did not speak out—because I was not a trade unionist. Then they came for the Jews, and I did not speak out—because I was not a Jew. Then they came for me—and there was no one left to speak for me. — Martin Niemöller</li>
              <li>We judge ourselves by our intentions, but others by their actions. - Stephen M.R. Covey</li>
              <li>Being deeply loved by someone gives you strength, while loving someone deeply gives you courage. - Lao Tzu</li>
              <li>Life can only be understood backwards; but it must be lived forward. - Soren Kierkgaard</li>
              <li>Float like butterfly sting like a bee. - Muhammad Ali</li>
              <li>Every lie we tell incurs a debt to the truth, sooner or later that debt is paid. - Chernobyl</li>
              <li>When injustice becomes law, resistance becomes duty. - Thomas Jefferson</li>
              <li>Those who make peaceful revolution impossible will make violent revolution inevitable. - John F Kennedy</li>
              <li>People should not be afraid of their governments. Governments should be afraid of their people. - V for Vendetta</li>
              <li>No plan survives first contact with the enemy. - Helmuth von Moltke the Elder</li>
              <li>Society grows great when old men plant trees whose shade they know they shall never sit in. - Greek Proverb</li>
              <li>The child who is not embraced by the village will burn it down to feel its warmth. - African Proverb</li>
              <li>Those who live in glass houses should not throw stones. - Proverb</li>
              <li>This too shall pass. - Persian Adage</li>
              <li>When people are not punished for breaking the rules, the ones following the rules are the ones being punished. - u/orderofmagnitude</li>
              <li>Just exist for a while and be decent, that's heroism enough. - u/Exurb1a</li>
              <li>Tell my mistakes to me, not to others. My mistakes are to be corrected by me, not others. - Anonymous</li>
              <li>If the penalty for a crime is a fine then that law only exists for the lower class. - Anonymous</li>
              <li>Infinite growth is not possible on a finite planet. - Anonymous</li>
              <li>If it costs you your peace, it's too expensive. - Anonymous</li>
              <li>Let not any one pacify his conscience by the delusion that he can do no harm if he takes no part, and forms no opinion. Bad men need nothing more to compass their ends, than that good men should look on and do nothing. He is not a good man who, without a protest, allows wrong to be committed in his name, and with the means which he helps to supply, because he will not trouble himself to use his mind on the subject. - John Stuart Mill</li>
            </ul>
          </div>
        </div>
        </main>
    </div>
  );
}
