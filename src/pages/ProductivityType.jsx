import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowLeft, ArrowRight, RefreshCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const questions = [
  {
    id: 'q1',
    text: 'When I start a task, I naturally break it into small, clear steps.',
  },
  {
    id: 'q2',
    text: 'I can focus deeply for 25–60 minutes without needing to switch tasks.',
  },
  {
    id: 'q3',
    text: 'I follow through on plans even when my energy dips.',
  },
  {
    id: 'q4',
    text: 'I schedule rest or recovery so I can keep momentum later.',
  },
  {
    id: 'q5',
    text: 'I feel energized by collaboration or external accountability.',
  },
  {
    id: 'q6',
    text: 'I notice distractions quickly and return to my work.',
  },
  {
    id: 'q7',
    text: 'I prefer consistent routines over last-minute sprints.',
  },
  {
    id: 'q8',
    text: 'I prioritize the most important task before smaller ones.',
  },
  {
    id: 'q9',
    text: 'I can adapt my plan without losing progress.',
  },
  {
    id: 'q10',
    text: 'I finish tasks with enough time to review and polish.',
  },
];

const options = [
  { value: 1, label: 'Not me yet', helper: 'I rarely do this.' },
  { value: 2, label: 'Sometimes me', helper: 'I do this on good days.' },
  { value: 3, label: 'Often me', helper: 'This is a familiar pattern.' },
  { value: 4, label: 'Very me', helper: 'This describes me strongly.' },
];

const resultBands = [
  {
    min: 10,
    max: 17,
    title: 'The Gentle Starter',
    summary:
      'You thrive with a calm on-ramp. Your productivity grows when you build safety, clarity, and tiny wins first.',
    science:
      'Research on self-regulation shows that small, consistent wins boost confidence and follow-through.',
    tips: [
      'Start with a 5-minute “warm-up task” to build momentum.',
      'Use a simple daily plan: 1 focus task + 2 lighter tasks.',
      'Pair tasks with a cue (time or location) to reduce decision fatigue.',
    ],
  },
  {
    min: 18,
    max: 25,
    title: 'The Steady Builder',
    summary:
      'You do best with reliable systems. You value pace over pressure and feel grounded by structure.',
    science:
      'Habit formation research shows that stable routines reduce cognitive load and protect focus.',
    tips: [
      'Create a repeatable “start ritual” to enter focus mode quickly.',
      'Batch similar tasks to protect your attention.',
      'Review your week every Friday to reinforce progress.',
    ],
  },
  {
    min: 26,
    max: 33,
    title: 'The Focused Driver',
    summary:
      'You’re energized by challenge and clear goals. You move fast when the target is meaningful.',
    science:
      'Goal-setting theory shows that specific, meaningful targets increase sustained effort.',
    tips: [
      'Set a single daily “win condition” that defines success.',
      'Use 45–60 minute focus blocks with a short recovery break.',
      'Protect your peak hours by turning off low-value notifications.',
    ],
  },
  {
    min: 34,
    max: 40,
    title: 'The Momentum Master',
    summary:
      'You’re in a strong flow rhythm. You combine focus, flexibility, and follow-through with ease.',
    science:
      'Studies on attention cycles show that deliberate recovery helps maintain long-term performance.',
    tips: [
      'Keep a “next-up list” so you always know what to do next.',
      'Teach or share your system to reinforce what works for you.',
      'Schedule deep recovery days to sustain your long-term edge.',
    ],
  },
];

const ProductivityType = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, value) => sum + value, 0),
    [answers]
  );

  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  const currentQuestion = questions[currentIndex];
  const currentAnswer = answers[currentQuestion?.id];

  const result = useMemo(
    () =>
      resultBands.find(
        (band) => totalScore >= band.min && totalScore <= band.max
      ) || resultBands[0],
    [totalScore]
  );

  const handleSelect = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIndex(0);
    setShowResults(false);
  };

  return (
    <>
      <Helmet>
        <title>Productivity Type Quiz | Transform Life</title>
        <meta
          name="description"
          content="Discover your productivity type with a science-backed, friendly assessment. Answer 10 questions and get personalized guidance."
        />
      </Helmet>

      <section className="min-h-screen px-4 pt-28 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-orange-200 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              <Sparkles className="w-4 h-4" />
              Science-backed productivity type tool
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
              Discover your productivity type
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Answer 10 quick questions with 4 options each. We’ll calculate your total
              score and give you a supportive, research-informed profile that feels
              personal and close.
            </p>
          </div>

          <div className="bg-white/80 border border-white/60 shadow-xl rounded-3xl p-8 md:p-12">
            {!showResults ? (
              <div className="space-y-8">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>
                    Question {currentIndex + 1} of {questions.length}
                  </span>
                  <span>{progress}% complete</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-orange-100"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                    {currentQuestion.text}
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    {options.map((option) => {
                      const isSelected = currentAnswer === option.value;
                      return (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelect(currentQuestion.id, option.value)}
                          className={cn(
                            'text-left rounded-2xl border p-4 transition-all shadow-sm',
                            isSelected
                              ? 'border-orange-400 bg-white shadow-md ring-2 ring-orange-200'
                              : 'border-white/70 bg-white/70 hover:border-orange-200'
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-semibold text-gray-900">
                              {option.label}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-5 h-5 text-orange-500" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            {option.helper}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>

                <div className="flex flex-col sm:flex-row gap-3 justify-between">
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={currentIndex === 0}
                    className="rounded-full px-6"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!currentAnswer}
                    className="rounded-full px-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                  >
                    {currentIndex === questions.length - 1 ? 'See my result' : 'Next'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-orange-500 font-semibold">
                      Your total score
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">
                      {totalScore} / {questions.length * 4}
                    </h2>
                  </div>
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="rounded-full px-6"
                  >
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    Retake the quiz
                  </Button>
                </div>

                <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 rounded-3xl p-6 md:p-8 border border-orange-100">
                  <div className="flex items-center gap-2 text-orange-600 font-semibold">
                    <Sparkles className="w-5 h-5" />
                    Productivity Type
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                    {result.title}
                  </h3>
                  <p className="text-lg text-gray-700 mt-4">
                    {result.summary}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    {result.science}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {result.tips.map((tip) => (
                    <div
                      key={tip}
                      className="bg-white border border-orange-100 rounded-2xl p-4 shadow-sm"
                    >
                      <div className="text-orange-500 font-semibold">Tip</div>
                      <p className="text-gray-700 mt-2">{tip}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white border border-gray-100 rounded-2xl p-6 text-gray-600 text-sm leading-relaxed">
                  This tool is designed to feel close and supportive while staying grounded in
                  research on attention, habits, and self-regulation. It’s not a diagnosis —
                  just a helpful snapshot so you can choose the next best step for you.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductivityType;
