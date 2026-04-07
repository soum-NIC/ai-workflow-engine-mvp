import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Link2, LayoutGrid } from 'lucide-react';

interface TaskProposal {
    title: string;
    description: string;
    parent_id?: string;
    depends_on?: string[];
}

interface ChatProposalProps {
    proposal: TaskProposal;
    onCommit: (proposal: TaskProposal) => void;
    isCommitted?: boolean;
}

export function ChatProposal({ proposal, onCommit, isCommitted }: ChatProposalProps) {
    return (
        <Card className="mt-3 bg-primary/[0.03] border-primary/20 shadow-lg p-4 relative overflow-hidden group">
            <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-[8px] font-black uppercase tracking-widest bg-primary/10 border-primary/20 text-primary h-4 px-1.5 leading-none">
                            Suggested Work Item
                        </Badge>
                        {proposal.parent_id && (
                            <div className="flex items-center gap-1 text-[8px] font-black text-muted-foreground uppercase tracking-widest">
                                <LayoutGrid className="w-2.5 h-2.5" />
                                Subtask
                            </div>
                        )}
                    </div>
                    <h4 className="text-xs font-black tracking-tight">{proposal.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed italic">{proposal.description}</p>

                    {proposal.depends_on && proposal.depends_on.length > 0 && (
                        <div className="flex items-center gap-1.5 mt-2 opacity-60">
                            <Link2 className="w-3 h-3 text-primary" />
                            <span className="text-[8px] font-black uppercase tracking-widest text-primary/80">Injects {proposal.depends_on.length} dependencies</span>
                        </div>
                    )}
                </div>

                <Button
                    size="sm"
                    className="h-8 rounded-lg text-[9px] font-black uppercase tracking-widest shrink-0"
                    onClick={() => onCommit(proposal)}
                    disabled={isCommitted}
                >
                    {isCommitted ? (
                        "Injected"
                    ) : (
                        <>
                            <Plus className="w-3.5 h-3.5 mr-1" />
                            Commit Item
                        </>
                    )}
                </Button>
            </div>
        </Card>
    );
}
