"use client"
import { useState } from "react"
import type React from "react"

import ProtectedLayout from "../components/protected-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "../components/ui/card"
import { Tabs } from "../components/ui/tabs"
import { TextGenerateEffect } from "../components/ui/text-generate-effect"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import {
  CheckCircle,
  Copy,
  Code,
  BookOpen,
  Compass,
  FileText,
  ImageIcon,
  CheckSquare,
  Brain,
  BarChart,
  Bot,
  Key,
  FileCode,
  BookMarked,
  ChevronRight,
  ExternalLink,
} from "lucide-react"

export default function Academy() {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null)

  const copyToClipboard = (text: string, snippetId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedSnippet(snippetId)
    setTimeout(() => setCopiedSnippet(null), 2000)
  }

  const CodeSnippet = ({
    title,
    language,
    code,
    id,
  }: {
    title: string
    language: string
    code: string
    id: string
  }) => {
    return (
      <div className="rounded-lg border border-border overflow-hidden mb-6">
        <div className="bg-muted px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <Code className="h-4 w-4 mr-2 text-muted-foreground" />
            <span className="text-sm font-medium">{title}</span>
          </div>
          <div className="flex items-center">
            <Badge variant="outline" className="mr-2 text-xs">
              {language}
            </Badge>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => copyToClipboard(code, id)}>
              {copiedSnippet === id ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div className="bg-black p-4 overflow-x-auto">
          <pre className="text-sm text-white font-mono">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    )
  }

  const StepItem = ({
    title,
    children,
  }: {
    title: string
    children: React.ReactNode
  }) => {
    return (
      <div className="mb-4">
        <h4 className="text-base font-medium mb-2 flex items-center">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary mr-2 text-xs">
            <ChevronRight className="h-3 w-3" />
          </span>
          {title}
        </h4>
        <div className="pl-8 text-sm text-muted-foreground">{children}</div>
      </div>
    )
  }

  const InfoCard = ({
    icon,
    title,
    children,
  }: {
    icon: React.ReactNode
    title: string
    children: React.ReactNode
  }) => {
    return (
      <Card className="mb-6 border-primary/20 hover:border-primary/40 transition-colors">
        <CardHeader className="pb-2">
          <div className="flex items-center">
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">{icon}</div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    )
  }

  const tabs = [
    {
      title: "Getting Started",
      value: "getting-started",
      icon: <Compass className="h-4 w-4 mr-2" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <Compass className="h-5 w-5 mr-2 text-primary" />
            Getting Started
          </h3>
          <p className="text-muted-foreground mb-6">
            Welcome to OanicAI Academy! This section will help you understand the platform and get started with your
            first project.
          </p>

          <InfoCard icon={<BookOpen className="h-4 w-4 text-primary" />} title="Introduction to OanicAI Platform">
            <p className="text-sm text-muted-foreground mb-4">
              OanicAI is a Web3-enabled platform designed to streamline and decentralize the process of data labeling
              and validation for AI training datasets. It allows contributors to annotate text or image data, and
              validators to ensure data quality. Users can earn rewards based on their contributions and accuracy.
            </p>
          </InfoCard>

          <InfoCard
            icon={<CheckCircle className="h-4 w-4 text-primary" />}
            title="Why Data Labeling & Validation Matters"
          >
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Labeling</strong> assigns meaning to raw data (e.g., classifying text sentiment or identifying
                objects in images).
              </p>
              <p>
                <strong>Validation</strong> verifies the accuracy of labeled data to maintain high-quality training
                inputs.
              </p>
              <p>
                Bad data leads to poor AI performance. Quality assurance at the labeling stage can prevent downstream
                model failures.
              </p>
            </div>
          </InfoCard>

          <InfoCard
            icon={<FileText className="h-4 w-4 text-primary" />}
            title="Creating Your OanicAI Workspace (Step-by-Step)"
          >
            <div className="space-y-4">
              <StepItem title="Register/Login">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Visit OanicAI.com and sign up.</li>
                  <li>Connect your wallet using WalletConnect.</li>
                </ul>
              </StepItem>

              <StepItem title="Create a Project">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Go to Dashboard &gt; New Project.</li>
                  <li>Choose project type: Text or Image.</li>
                  <li>
                    Name your project and define your objective (e.g., "Sentiment Analysis" or "Object Detection").
                  </li>
                </ul>
              </StepItem>

              <StepItem title="Upload Data">
                <p className="mb-2">Acceptable formats:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>.csv, .jsonl for text (with columns like id, content, label)</li>
                  <li>.jpg, .png, .tiff for images</li>
                </ul>
                <p className="mt-2">Use the upload button or OanicAI API (POST /data).</p>
              </StepItem>

              <StepItem title="Add Collaborators">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Roles: Labeler, Validator, Reviewer</li>
                  <li>Invite users via email or wallet address.</li>
                </ul>
              </StepItem>

              <StepItem title="Define Task Schema">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Create labels (e.g., Positive/Negative/Neutral)</li>
                  <li>For image tasks, define object categories (e.g., Person, Dog, Car)</li>
                </ul>
              </StepItem>
            </div>
          </InfoCard>

          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Beginner</Badge>
                </div>
                <CardTitle className="text-lg">Text Labeling Basics</CardTitle>
                <CardDescription>Learn how to label text data for AI training</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    This course covers the fundamentals of text labeling, including:
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Named Entity Recognition (NER)
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Sentiment Analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Text Classification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Best practices for consistent labeling
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full">Start Learning</Button>
              </CardFooter>
            </Card>

            <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center mb-2">
                  <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">Beginner</Badge>
                </div>
                <CardTitle className="text-lg">Image Labeling Fundamentals</CardTitle>
                <CardDescription>Master the basics of image annotation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Learn how to effectively label images for computer vision:
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Bounding box creation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Polygon segmentation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Image classification
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Annotation best practices
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full">Start Learning</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: "Tutorials",
      value: "tutorials",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
            Tutorials
          </h3>
          <p className="text-muted-foreground mb-6">
            Follow these detailed tutorials to learn how to use OanicAI effectively for different types of data labeling
            and validation tasks.
          </p>

          <InfoCard
            icon={<FileText className="h-4 w-4 text-primary" />}
            title="Text Data Labeling (NER, Sentiment, Classification)"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Task Types:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Named Entity Recognition (NER)</li>
                  <li>Sentiment Classification</li>
                  <li>Topic Categorization</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Steps:</h4>

                <StepItem title="Open a Task">
                  <p>From your dashboard, click "Label" next to a batch of text.</p>
                </StepItem>

                <StepItem title="Highlight & Annotate">
                  <p>Select a span of text (e.g., a person's name) → choose label "Person."</p>
                  <p>For classification, select one label per document (radio-style).</p>
                </StepItem>

                <StepItem title="Shortcuts & Tools">
                  <p>Use Tab to move to the next task.</p>
                  <p>Use Ctrl + arrow keys to jump between sentences.</p>
                </StepItem>

                <StepItem title="Auto-Save">
                  <p>Labels auto-save every 5 seconds or when you navigate to the next item.</p>
                </StepItem>
              </div>

              <div className="mt-4">
                <CodeSnippet
                  id="text-labeling-example"
                  title="Example NER Annotation JSON"
                  language="json"
                  code={`{
  "id": "doc_123",
  "text": "Apple CEO Tim Cook announced new products at their Cupertino headquarters.",
  "entities": [
    {
      "start": 0,
      "end": 5,
      "label": "ORGANIZATION"
    },
    {
      "start": 9,
      "end": 17,
      "label": "TITLE"
    },
    {
      "start": 18,
      "end": 27,
      "label": "PERSON"
    },
    {
      "start": 58,
      "end": 67,
      "label": "LOCATION"
    }
  ]
}`}
                />
              </div>
            </div>
          </InfoCard>

          <InfoCard
            icon={<ImageIcon className="h-4 w-4 text-primary" />}
            title="Image Data Labeling (Bounding Boxes, Segmentation)"
          >
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Task Types:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Object Detection</li>
                  <li>Instance Segmentation</li>
                  <li>Image Classification</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Steps:</h4>

                <StepItem title="Open a Task">
                  <p>Go to "Label" under an image batch.</p>
                </StepItem>

                <StepItem title="Drawing Tools">
                  <p>Bounding Box: Click and drag over object.</p>
                  <p>Polygon: Click to outline shape, double-click to close.</p>
                  <p>Segmentation: Use brush tool to paint areas.</p>
                </StepItem>

                <StepItem title="Assign Labels">
                  <p>After drawing, select a label from the side panel.</p>
                </StepItem>

                <StepItem title="Tips">
                  <p>Use zoom (mouse wheel) for precision.</p>
                  <p>Shift + drag to move the image.</p>
                </StepItem>
              </div>

              <div className="mt-4">
                <CodeSnippet
                  id="image-labeling-example"
                  title="Example Bounding Box Annotation JSON"
                  language="json"
                  code={`{
  "id": "img_456",
  "file_name": "street_scene.jpg",
  "width": 1280,
  "height": 720,
  "annotations": [
    {
      "id": 1,
      "category_id": 1,
      "category_name": "car",
      "bbox": [100, 150, 200, 100],  // [x, y, width, height]
      "area": 20000,
      "iscrowd": 0
    },
    {
      "id": 2,
      "category_id": 2,
      "category_name": "person",
      "bbox": [400, 200, 50, 120],
      "area": 6000,
      "iscrowd": 0
    }
  ]
}`}
                />
              </div>
            </div>
          </InfoCard>

          <InfoCard icon={<CheckSquare className="h-4 w-4 text-primary" />} title="Validation Workflows (Text & Image)">
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-medium mb-3">Text Data Validation</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Goal: Ensure span labels or class tags are consistent with schema.
                </p>

                <div className="space-y-3">
                  <h5 className="text-sm font-medium">Steps:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Open validation view (Validator role required).</li>
                    <li>Review label(s) vs. raw text.</li>
                    <li>
                      Options:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Approve – correct label</li>
                        <li>Reject – incorrect or missing labels</li>
                        <li>Edit – fix span or label and resubmit</li>
                      </ul>
                    </li>
                    <li>Leave comments for labelers if correction is needed.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-base font-medium mb-3">Image Data Validation</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Goal: Ensure shapes match object boundaries and correct labels.
                </p>

                <div className="space-y-3">
                  <h5 className="text-sm font-medium">Steps:</h5>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Open the image validation panel.</li>
                    <li>Toggle mask overlay for segmentation.</li>
                    <li>Use outline or bounding box visual mode.</li>
                    <li>
                      Check for:
                      <ul className="list-disc pl-5 mt-1">
                        <li>Overlapping shapes</li>
                        <li>Misaligned labels</li>
                        <li>Missing objects</li>
                      </ul>
                    </li>
                    <li>Approve, edit, or reject as needed.</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4">
                <CodeSnippet
                  id="validation-example"
                  title="Example Validation API Response"
                  language="json"
                  code={`{
  "label_id": "label_789",
  "data_id": "doc_123",
  "validation": {
    "status": "rejected",
    "reason": "missing_entities",
    "comment": "The location 'Cupertino' was not labeled",
    "validator_id": "user_456",
    "timestamp": "2023-06-15T14:22:33Z"
  },
  "original_label": {
    "entities": [
      {
        "start": 0,
        "end": 5,
        "label": "ORGANIZATION"
      },
      {
        "start": 18,
        "end": 27,
        "label": "PERSON"
      }
    ]
  }
}`}
                />
              </div>
            </div>
          </InfoCard>
        </div>
      ),
    },
    {
      title: "Advanced Topics",
      value: "advanced-topics",
      icon: <Brain className="h-4 w-4 mr-2" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <Brain className="h-5 w-5 mr-2 text-primary" />
            Advanced Topics
          </h3>
          <p className="text-muted-foreground mb-6">
            Dive deeper into advanced concepts and techniques for power users. These topics cover complex integrations
            and optimizations.
          </p>

          <InfoCard icon={<Brain className="h-4 w-4 text-primary" />} title="Active Learning & Smart Sampling">
            <p className="text-sm text-muted-foreground mb-4">
              Use machine learning models to suggest the most uncertain data to label first.
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Steps:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Enable "Active Sampling" in project settings.</li>
                <li>OanicAI ranks data by model confidence.</li>
                <li>Labelers are shown low-confidence (i.e., most informative) data first.</li>
                <li>Model retrains periodically to update selection.</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-sm font-medium mb-2">How Active Learning Works</h4>
              <p className="text-xs text-muted-foreground">
                Active learning is an iterative process where the model identifies the most valuable data points for
                human labeling:
              </p>
              <ol className="list-decimal pl-5 mt-2 space-y-1 text-xs text-muted-foreground">
                <li>Initial model is trained on a small labeled dataset</li>
                <li>Model predicts labels for unlabeled data</li>
                <li>Data points with highest uncertainty are selected</li>
                <li>Humans label these selected data points</li>
                <li>Model is retrained with the newly labeled data</li>
                <li>Process repeats until desired performance is reached</li>
              </ol>
            </div>
          </InfoCard>

          <InfoCard icon={<BarChart className="h-4 w-4 text-primary" />} title="Quality Assurance & Metrics">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Metrics:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>Inter-Annotator Agreement (IAA):</strong> % agreement between two or more labelers.
                  </li>
                  <li>
                    <strong>Validator Accuracy:</strong> % of labels correctly validated.
                  </li>
                  <li>
                    <strong>Error Rate:</strong> % of labels rejected by validators or reviewers.
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">QA Techniques:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>
                    <strong>Spot-Checks:</strong> Manually review 5–10% of completed labels.
                  </li>
                  <li>
                    <strong>Gold Standard:</strong> Pre-labeled data used to compare annotator performance.
                  </li>
                  <li>
                    <strong>Real-Time Warnings:</strong> OanicAI flags common issues (e.g., overlapping spans).
                  </li>
                </ul>
              </div>

              <div className="mt-4">
                <CodeSnippet
                  id="qa-metrics-example"
                  title="Example QA Metrics API Response"
                  language="json"
                  code={`{
  "project_id": "proj_123",
  "metrics": {
    "inter_annotator_agreement": {
      "overall": 0.87,
      "by_category": {
        "PERSON": 0.92,
        "ORGANIZATION": 0.85,
        "LOCATION": 0.89
      }
    },
    "validator_accuracy": 0.94,
    "error_rate": 0.08,
    "throughput": {
      "labels_per_hour": 42,
      "average_time_per_item": 85.7
    }
  },
  "top_issues": [
    {
      "type": "inconsistent_span",
      "description": "Inconsistent labeling of company names",
      "frequency": 0.12
    },
    {
      "type": "missing_entity",
      "description": "Locations frequently missed",
      "frequency": 0.09
    }
  ]
}`}
                />
              </div>
            </div>
          </InfoCard>

          <InfoCard icon={<Bot className="h-4 w-4 text-primary" />} title="Model-Assisted Labeling">
            <p className="text-sm text-muted-foreground mb-4">Use models to pre-label data.</p>

            <div className="space-y-3">
              <h4 className="text-sm font-medium">Steps:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Upload model predictions to your dataset.</li>
                <li>API: POST /prelabels</li>
                <li>Enable "Pre-Label Review Mode."</li>
                <li>Labelers verify or adjust the model's suggestion.</li>
              </ul>
            </div>

            <div className="mt-3">
              <h4 className="text-sm font-medium mb-2">Use cases:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Sentiment classification (pre-fill based on LLM)</li>
                <li>Object detection (YOLO model outputs)</li>
              </ul>
            </div>

            <div className="mt-4">
              <CodeSnippet
                id="model-assisted-example"
                title="Example Pre-Label API Request"
                language="json"
                code={`// POST /api/projects/proj_123/prelabels
{
  "data_id": "img_456",
  "model_id": "yolov5",
  "model_version": "v6.1",
  "confidence_threshold": 0.7,
  "predictions": [
    {
      "category_id": 1,
      "category_name": "car",
      "bbox": [105, 153, 198, 97],
      "confidence": 0.92
    },
    {
      "category_id": 2,
      "category_name": "person",
      "bbox": [402, 201, 48, 118],
      "confidence": 0.88
    }
  ]
}`}
              />
            </div>
          </InfoCard>
        </div>
      ),
    },
    {
      title: "API Documentation",
      value: "api-documentation",
      icon: <FileCode className="h-4 w-4 mr-2" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <FileCode className="h-5 w-5 mr-2 text-primary" />
            API Documentation
          </h3>
          <p className="text-muted-foreground mb-6">
            Comprehensive documentation for OanicAI's API endpoints and integration guides. Use these references to
            build custom integrations.
          </p>

          <InfoCard icon={<Key className="h-4 w-4 text-primary" />} title="Authentication">
            <p className="text-sm text-muted-foreground mb-4">Obtain API Key in user dashboard.</p>

            <p className="text-sm text-muted-foreground mb-2">Authenticate with header:</p>

            <CodeSnippet
              id="auth-header"
              title="Authorization Header"
              language="makefile"
              code={`Authorization: Bearer YOUR_API_KEY`}
            />

            <p className="text-sm text-muted-foreground mt-4 mb-2">Curl Example:</p>

            <CodeSnippet
              id="curl-example"
              title="Curl Request Example"
              language="bash"
              code={`curl -H "Authorization: Bearer YOUR_API_KEY" https://api.oanicai.com/projects`}
            />
          </InfoCard>

          <InfoCard icon={<FileCode className="h-4 w-4 text-primary" />} title="Endpoints">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Data Upload</h4>
                <CodeSnippet id="data-upload" title="Upload Data" language="http" code={`POST /projects/:id/data`} />
                <p className="text-xs text-muted-foreground mt-1">Upload .csv, .json, or image files.</p>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Submit Labels</h4>
                <CodeSnippet
                  id="submit-labels"
                  title="Submit Labels"
                  language="http"
                  code={`POST /batches/:id/labels`}
                />
                <p className="text-xs text-muted-foreground mt-1 mb-2">Payload example:</p>
                <CodeSnippet
                  id="labels-payload"
                  title="Labels Payload"
                  language="json"
                  code={`{
  "data_id": "abc123",
  "label": "Positive",
  "confidence": 0.95
}`}
                />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Get Labels</h4>
                <CodeSnippet id="get-labels" title="Get Labels" language="http" code={`GET /batches/:id/labels`} />
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Submit Validation</h4>
                <CodeSnippet
                  id="submit-validation"
                  title="Submit Validation"
                  language="http"
                  code={`PATCH /labels/:id`}
                />
                <p className="text-xs text-muted-foreground mt-1 mb-2">Payload:</p>
                <CodeSnippet
                  id="validation-payload"
                  title="Validation Payload"
                  language="json"
                  code={`{
  "status": "approved",
  "comment": "Correct entity"
}`}
                />
              </div>
            </div>
          </InfoCard>

          <InfoCard icon={<Code className="h-4 w-4 text-primary" />} title="Error Handling">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Code</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Message</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Fix Suggestions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="px-4 py-2 text-sm">400</td>
                    <td className="px-4 py-2 text-sm">Bad Request</td>
                    <td className="px-4 py-2 text-sm text-muted-foreground">Check schema/data types</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">401</td>
                    <td className="px-4 py-2 text-sm">Unauthorized</td>
                    <td className="px-4 py-2 text-sm text-muted-foreground">Add token to header</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">422</td>
                    <td className="px-4 py-2 text-sm">Unprocessable Entity</td>
                    <td className="px-4 py-2 text-sm text-muted-foreground">Check for null/missing fields</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm">429</td>
                    <td className="px-4 py-2 text-sm">Rate Limited</td>
                    <td className="px-4 py-2 text-sm text-muted-foreground">Back off & retry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </InfoCard>
        </div>
      ),
    },
    {
      title: "Resources",
      value: "resources",
      icon: <BookMarked className="h-4 w-4 mr-2" />,
      content: (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold flex items-center">
            <BookMarked className="h-5 w-5 mr-2 text-primary" />
            Resources
          </h3>
          <p className="text-muted-foreground mb-6">
            Explore these additional resources to enhance your OanicAI experience and deepen your knowledge of data
            labeling and validation.
          </p>

          <InfoCard icon={<BookOpen className="h-4 w-4 text-primary" />} title="Glossary">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium mb-2">Labeler</h4>
                <p className="text-sm text-muted-foreground">Annotates raw data</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Validator</h4>
                <p className="text-sm text-muted-foreground">Reviews labels for correctness</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Segmentation</h4>
                <p className="text-sm text-muted-foreground">Pixel-wise image labeling</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">NER</h4>
                <p className="text-sm text-muted-foreground">Named Entity Recognition</p>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Gold Dataset</h4>
                <p className="text-sm text-muted-foreground">High-quality data used to test labelers</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard icon={<FileText className="h-4 w-4 text-primary" />} title="Sample Datasets">
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Text:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Sentiment (IMDB)</li>
                  <li>Support Chat</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Image:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>COCO (Subset)</li>
                  <li>Medical X-Rays</li>
                  <li>Street Scenes</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">Download from Resources {'>'} Sample Datasets.</p>
            </div>
          </InfoCard>

          <InfoCard icon={<ExternalLink className="h-4 w-4 text-primary" />} title="Community &amp; Support">
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Join Slack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Connect with other OanicAI users and the team</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      Join Community
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-primary/10 hover:border-primary/30 transition-colors">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Telegram Group</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">Get real-time support and updates</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button variant="outline" size="sm" className="w-full">
                      Join Group
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Weekly Office Hours:</h4>
                <p className="text-sm text-muted-foreground">Thursdays 10 AM UTC</p>
              </div>
            </div>
          </InfoCard>

          <InfoCard icon={<FileText className="h-4 w-4 text-primary" />} title="Cheatsheets">
            <div className="space-y-4">
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                <li>Text Annotation Shortcuts</li>
                <li>Image Annotation Tools</li>
                <li>Validator Decision Trees</li>
              </ul>
              <p className="text-sm text-muted-foreground">Download printable PDF from the Resources tab.</p>
              <Button variant="outline" className="w-full mt-2">
                Download All Cheatsheets
              </Button>
            </div>
          </InfoCard>
        </div>
      ),
    },
  ]

  return (
    <ProtectedLayout>
      <div className="space-y-8">
        <div>
          <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent">
            <TextGenerateEffect words="OanicAI Academy" />
          </h1>
          <p className="mt-2 text-muted-foreground">
            Learn everything you need to know about data labeling, validation, and the OanicAI platform
          </p>
        </div>

        <Tabs defaultValue="getting-started" tabs={tabs} />
      </div>
    </ProtectedLayout>
  )
}
